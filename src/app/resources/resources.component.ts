import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  lee_lady_blurbs = 'http://www.math.hawaii.edu/~lee/homolog/books-homolog.html';

  at = [
    {
      author: 'Allen Hatcher',
      title: 'Algebraic Topology',
      title_url: 'https://pi.math.cornell.edu/~hatcher/AT/ATpage.html',
      year: '2002'
    },
    {
      author: 'Michael Starbird and Francis Su',
      title: 'Topology Through Inquiry',
      title_url: 'https://math.hmc.edu/su/topology-through-inquiry/',
      year: '2019'
    }
  ];

  cat = [
    {
      author: 'Tamal Dey and Yusu Wang',
      title: 'Computational Topology for Data Analysis',
      title_url: 'https://www.cs.purdue.edu/homes/tamaldey/book/CTDAbook/CTDAbook.html',
      year: '2021'
    },
    {
      author: 'Steve Oudot',
      title: 'Persistence Theory: From Quiver Representations to Data Analysis',
      title_url: 'https://geometrica.saclay.inria.fr/team/Steve.Oudot/books/o-pt-fqrtda-15/surv-209.pdf',
      year: '2015'
    },
  ];

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

  toc = [
    {
      author: 'Avi Wigderson',
      title: 'Math and Computation',
      title_url: 'https://www.math.ias.edu/avi/book',
      year: '2019'
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

  hdp = [
    {
      author: 'Roman Vershynin',
      title: 'High-Dimensional Probability',
      title_url: 'https://www.math.uci.edu/~rvershyn/papers/HDP-book/HDP-book.html',
      year: '2018'
    },
  ];

  mod = [
    {
      author: 'Avrim Blum, John Hopcroft, and Ravi Kannan',
      title: 'Foundations of Data Science',
      title_url: 'https://home.ttic.edu/~avrim/book.pdf',
      year: '2020'
    },
  ];

  differential_geometry = [
    {
      author: 'Tristan Needham',
      title: 'Visual Differential Geometry and Forms',
      title_url: 'https://www.vdgf.space/',
      year: '2021'
    },
  ];

  parametrized_complexity = [
    {
      author: 'Rod Downey and Mike Fellows',
      title: 'Fundamentals of Parameterized Complexity',
      title_url: 'https://www.springer.com/us/book/9781447155584',
      year: '2013'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
