// This component is based on Iacopini's Python snippet
// and then translated by AI
// SEE: https://github.com/iaciac/py-draw-simplicial-complex
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReloadService } from '../../@services/reload.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-simplex',
  standalone: true,
  templateUrl: './simplex.component.html',
  styleUrls: ['./simplex.component.css'],
})
export class SimplexComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  @ViewChild('simplexContainer', { static: true }) container!: ElementRef;

  constructor(private reloadService: ReloadService) {
    this.subscription = this.reloadService.reloadTrigger$.subscribe(componentId => {
      if (componentId === 'simplex') {
        this.createPattern();
      }
    });
  }

  generateRandomSimplices(): number[][] {
    const nodes = Array.from({ length: 10 }, (_, i) => i);
    const simplices: number[][] = [];

    // Generate maximally 4 pairwise items (edges)
    const pairwiseItems = new Set<string>();
    while (pairwiseItems.size < 4) {
      const edge = [nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)]].sort((a, b) => a - b);
      if (edge[0] !== edge[1]) {
        pairwiseItems.add(edge.join(','));
      }
    }
    simplices.push(...Array.from(pairwiseItems).map(item => item.split(',').map(Number)));

    // Generate maximally 2 tri-wise items (triangles)
    const triwiseItems = new Set<string>();
    while (triwiseItems.size < 2) {
      const triangle = [nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)]].sort((a, b) => a - b);
      if (new Set(triangle).size === 3) {
        triwiseItems.add(triangle.join(','));
      }
    }
    simplices.push(...Array.from(triwiseItems).map(item => item.split(',').map(Number)));

    // Generate maximally 1 four-wise items (tetrahedrons)
    const fourwiseItems = new Set<string>();
    while (fourwiseItems.size < 1) {
      const tetrahedron = [nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)], nodes[Math.floor(Math.random() * nodes.length)]].sort((a, b) => a - b);
      if (new Set(tetrahedron).size === 4) {
        fourwiseItems.add(tetrahedron.join(','));
      }
    }
    simplices.push(...Array.from(fourwiseItems).map(item => item.split(',').map(Number)));

    return simplices;

  }

  ngOnInit() {
    this.createPattern();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createPattern() {
    // Clear existing SVG content first
    d3.select(this.container.nativeElement)
      .selectAll('svg')
      .remove();
    this.drawSimplicialComplex();

  }

  // ngAfterViewInit() {
  //   this.drawSimplicialComplex();
  // }

  drawSimplicialComplex() {
    const simplices = this.generateRandomSimplices();
    const width = this.container.nativeElement.clientWidth;
    const height = this.container.nativeElement.clientHeight;

    const margin = 5; // Margin to keep nodes away from the edges
    const boundingBoxWidth = width - 2 * margin;
    const boundingBoxHeight = height - 2 * margin;



    const svg = d3.select(this.container.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // const nodes = Array.from(new Set(simplices.flat()));
    const nodes = Array.from(new Set(simplices.flat())).map(d => ({ id: d, x: 0, y: 0 }));



    const edges = Array.from(new Set(simplices.flatMap(simplex =>
      simplex.flatMap((v, i) =>
        simplex.slice(i + 1).map(w => [v, w].sort((a, b) => a - b))
      )
    )));
    const triangles = Array.from(new Set(simplices.flatMap(simplex =>
      simplex.length >= 3 ? simplex.flatMap((v, i) =>
        simplex.slice(i + 1).flatMap((w, j) =>
          simplex.slice(i + j + 2).map(u => [v, w, u].sort((a, b) => a - b))
        )
      ) : []
    )));

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(edges.map(d => ({
        source: nodes.find(n => n.id === d[0])!,
        target: nodes.find(n => n.id === d[1])!
      })))
        .distance(10))
      .force('charge', d3.forceManyBody().strength(-100)) // Increased negative strength for more attraction
      .force('collide', d3.forceCollide().radius(5)) // Added collision force to prevent overlap
      .force('center', d3.forceCenter(0, 0))
      .force('gravity', d3.forceRadial(0, 0, 0).strength(0.1)) // Added radial force for gravity
      .on('tick', ticked);


    const triangle = svg.selectAll('.triangle')
      .data(triangles)
      .enter().append('path')
      .attr('class', 'triangle')
      .style('fill', d3.schemeBlues[9][6])
      .style('fill-opacity', 0.5)
      .style('stroke', 'black')
      .style('stroke-width', 1.);

    const linkData = edges.map(d => ({
      source: nodes.find(n => n.id === d[0])!,
      target: nodes.find(n => n.id === d[1])!
    }))
    const link = svg.selectAll('.link')
      .data(linkData)
      .enter().append('line')
      .attr('class', 'link')
      .style('stroke', 'black')
      .style('stroke-width', 1.);

    const node = svg.selectAll('.node')
      .data(nodes)
      .enter().append('circle')
      .attr('class', 'node')
      .attr('r', 5)
      .style('fill', 'grey')
      .style('stroke', 'white')
      .style('stroke-width', 1.)
      .call(d3.drag<SVGCircleElement, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    function ticked() {
      // Constrain the nodes to the bounding box
      nodes.forEach(d => {
        d.x = Math.max(-boundingBoxWidth / 2, Math.min(boundingBoxWidth / 2, d.x));
        d.y = Math.max(-boundingBoxHeight / 2, Math.min(boundingBoxHeight / 2, d.y));
      });

      triangle.attr('d', d => {
        const points = d.map(id => nodes.find(n => n.id === id));
        if (points.every(point => point)) {
          return points[0] && points[1] && points[2]
            ? `M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}L${points[2].x},${points[2].y}Z`
            : '';
        }
        return '';
      });

      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    }


    function dragstarted(event: d3.D3DragEvent<SVGCircleElement, any, any>, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: d3.D3DragEvent<SVGCircleElement, any, any>, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGCircleElement, any, any>, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }
}
