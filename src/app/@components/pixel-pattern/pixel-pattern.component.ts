import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReloadService } from '../../@services/reload.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-pixel-pattern',
  standalone: true,
  templateUrl: './pixel-pattern.component.html',
  styleUrls: ['./pixel-pattern.component.css'],
})
export class PixelPatternComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private reloadService: ReloadService) {
    this.subscription = this.reloadService.reloadTrigger$.subscribe(componentId => {
      if (componentId === 'pixel') {
        this.createPattern();
      }
    });
  }

  @ViewChild('chartContainer', { static: true })
  private chartContainer!: ElementRef;

  ngOnInit(): void {
    this.createPattern();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private generateRandomPattern(size: number): number[][] {
    return Array(size).fill(null).map(() =>
      Array(size).fill(null).map(() => Math.random() < 0.3 ? 1 : 0)
    );
  }

  private getRandomShade(): string {
    const baseColor = d3.rgb('#276190');
    const variation = 100; // Adjust this value to control shade variation

    const r = Math.max(0, Math.min(255, baseColor.r + (Math.random() - 0.5) * variation));
    const g = Math.max(0, Math.min(255, baseColor.g + (Math.random() - 0.5) * variation));
    const b = Math.max(0, Math.min(255, baseColor.b + (Math.random() - 0.5) * variation));

    return d3.rgb(r, g, b).toString();
  }

  private createPattern(): void {
    // Clear existing SVG content first
    d3.select(this.chartContainer.nativeElement)
      .selectAll('svg')
      .remove();
    const size = 80;
    const gridSize = 8;
    const pixelSize = size / gridSize;
    const pattern = this.generateRandomPattern(gridSize);

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', size)
      .attr('height', size);

    pattern.forEach((row, i) => {
      row.forEach((value, j) => {
        svg.append('rect')
          .attr('x', j * pixelSize)
          .attr('y', i * pixelSize)
          .attr('width', pixelSize)
          .attr('height', pixelSize)
          .style('fill', value === 1 ? this.getRandomShade() : 'transparent')
          .style('stroke', 'var(--stroke-color)')
          .style('stroke-width', '2px');
      });
    });
  }
}
