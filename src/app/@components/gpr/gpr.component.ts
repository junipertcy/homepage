import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReloadService } from '../../@services/reload.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-gpr',
  standalone: true,
  templateUrl: './gpr.component.html',
  styleUrls: ['./gpr.component.css'],
})
export class GprComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @ViewChild('gprContainer', { static: true })
  private gprContainer!: ElementRef;
  constructor(private reloadService: ReloadService) {
    this.subscription = this.reloadService.reloadTrigger$.subscribe(componentId => {
      if (componentId === 'gpr') {
        this.createPlot();
      }
    });
  }


  ngOnInit() {
    this.createPlot();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createPlot() {
    // Clear existing SVG content first
    d3.select(this.gprContainer.nativeElement)
      .selectAll('svg')
      .remove();
    const margin = { top: 0, right: 0, bottom: 0, left: 10 };
    const width = 100 - margin.left - margin.right;
    const height = 100 - margin.top - margin.bottom;

    const svg = d3.select(this.gprContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const generatePoints = (): Array<{ x: number; y: number }> => {
      const basePoints = [2, 5, 8]; // Roughly equally spaced base points
      return basePoints.map(base => ({
        x: Math.max(0, Math.min(10, base + (Math.random() - 0.5) * 2)), // Add small random offset
        y: 2 + Math.random() * 6
      }));
    };

    const points: Array<{ x: number; y: number }> = generatePoints();


    // Set up scales
    const xScale = d3.scaleLinear().domain([0, 10]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    // Generate Gaussian Process Regression confidence interval data
    const confidenceData = this.gaussianProcessConfidence(points, d3.range(0, 10, 0.1));

    // Draw confidence interval
    const area = d3.area<{ x: number; y: number; yMin: number; yMax: number }>()
      .x((d) => xScale(d.x))
      .y0((d) => yScale(d.yMin))
      .y1((d) => yScale(d.yMax));

    svg.append('path')
      .datum(confidenceData)
      .attr('fill', '#276190')
      .attr('opacity', 0.5)
      .attr('stroke', 'none')
      .attr('d', area);

    // Draw mean line
    const line = d3.line<{ x: number; y: number; yMin: number; yMax: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg.append('path')
      .datum(confidenceData)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('d', line);

    // Draw points
    svg.selectAll('.point')
      .data(points)
      .enter()
      .append('circle')
      .attr('class', 'point')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5)
      .style('fill', 'grey')
      .style('stroke', 'white')
      .style('stroke-width', 1.);
  }

  private gaussianProcessConfidence(points: Array<{ x: number; y: number }>, xValues: number[]) {
    const xCoords = points.map((p) => p.x);
    const yCoords = points.map((p) => p.y);

    const rbfKernel = (x1: number, x2: number, lengthScale = 2.0) =>
      Math.exp(-0.5 * ((x1 - x2) ** 2) / lengthScale ** 2);

    const K = xCoords.map((x1) =>
      xCoords.map((x2) => rbfKernel(x1, x2))
    );
    const Kinv = this.matrixInverse(K);

    return xValues.map((x) => {
      const kStar = xCoords.map((xi) => rbfKernel(x, xi));
      const mu = kStar.reduce(
        (sum, k, i) =>
          sum +
          k *
          Kinv[i].reduce(
            (s, kinv, j) => s + kinv * yCoords[j],
            0
          ),
        0
      );
      const variance =
        rbfKernel(x, x) -
        kStar.reduce(
          (sum, k, i) =>
            sum +
            k *
            Kinv[i].reduce(
              (s, kinv, j) => s + kinv * kStar[j],
              0
            ),
          0
        );
      const sigma = Math.sqrt(Math.max(0, variance));

      return {
        x,
        y: mu,
        yMin: mu - 1.96 * sigma,
        yMax: mu + 1.96 * sigma,
      };
    });
  }

  private matrixInverse(matrix: number[][]): number[][] {
    // Matrix inversion logic remains unchanged
    const n = matrix.length;
    const identity = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) identity[i][i] = 1;

    const augmentedMatrix = matrix.map((row, i) => [
      ...row,
      ...identity[i],
    ]);

    for (let i = 0; i < n; i++) {
      let maxElement = Math.abs(augmentedMatrix[i][i]);
      let maxRow = i;
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(augmentedMatrix[k][i]) > maxElement) {
          maxElement = Math.abs(augmentedMatrix[k][i]);
          maxRow = k;
        }
      }

      [augmentedMatrix[i], augmentedMatrix[maxRow]] =
        [augmentedMatrix[maxRow], augmentedMatrix[i]];

      for (let k = i + 1; k < n; k++) {
        const c =
          -augmentedMatrix[k][i] / augmentedMatrix[i][i];
        for (let j = i; j < n * 2; j++) {
          if (i === j) continue;
          augmentedMatrix[k][j] += c * augmentedMatrix[i][j];
        }
      }
    }

    for (let i = n - 1; i >= 0; i--) {
      for (let k = i - 1; k >= 0; k--) {
        const c =
          -augmentedMatrix[k][i] / augmentedMatrix[i][i];
        for (let j = n * 2 - 1; j >= i; j--) {
          augmentedMatrix[k][j] += c * augmentedMatrix[i][j];
        }
      }
    }

    for (let i = 0; i < n; i++) {
      const c = augmentedMatrix[i][i];
      for (let j = n * 2 - 1; j >= i; j--) {
        augmentedMatrix[i][j] /= c;
      }
    }

    return augmentedMatrix.map((row) => row.slice(n));
  }
}
