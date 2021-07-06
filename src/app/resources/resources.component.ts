import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  lee_lady_blurbs = 'http://www.math.hawaii.edu/~lee/homolog/books-homolog.html';
  homological_algebra = [
    {
      author: 'Joseph Rotman',
      title: 'An Introduction to Homological Algebra',
      title_url: 'https://link.springer.com/book/10.1007/b98977',
      year: '2009'
    },
    {
      author: 'Charles Weibel',
      title: 'An introduction to homological algebra',
      title_url: 'https://doi.org/10.1017/CBO9781139644136',
      year: '1994'
    },
  ];

  theory_of_computing = [
    {
      author: 'Joseph Rotman',
      title: 'An Introduction to Homological Algebra',
      title_url: 'https://link.springer.com/book/10.1007/b98977',
      year: '2009'
    },
    {
      author: 'Cris Moore and Stephan Mertens',
      title: 'The Nature Of Computation',
      title_url: 'http://nature-of-computation.org/',
      year: '2011'
    },
  ];

  category_theory = [
    {
      author: 'Emily Riehl',
      title: 'Category Theory in Context',
      title_url: 'https://math.jhu.edu/~eriehl/context/',
      year: '2016'
    },
    {
      author: 'Tom Leinster',
      title: 'Basic Category Theory',
      title_url: 'https://www.maths.ed.ac.uk/~tl/bct/',
      year: '2014'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
