import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textbooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textbooks.component.html',
  styleUrls: ['./textbooks.component.css'],
})
export class TextbooksComponent implements OnInit {
  getLastNames(authors: string): string {
    if (authors === 'Various authors') {
      return authors;
    }

    return authors
      .split(',')
      .map((author) => {
        const names = author.trim().split(' ');
        return names[names.length - 1];
      })
      .join('–');
  }

  lee_lady_blurbs =
    'http://www.math.hawaii.edu/~lee/homolog/books-homolog.html';

  statistical_mechanics = [
    {
      authors: 'David MacKay',
      title: 'Information Theory, Inference, and Learning Algorithms',
      title_url: 'http://www.inference.org.uk/itprnn/book.html',
      year: '2003',
    },
  ];

  si = [
    {
      authors: 'Trevor Hastie, Rob Tibshirani, and Martin Wainwright',
      title: 'Statistical Learning with Sparsity',
      title_url: 'https://hastie.su.domains/StatLearnSparsity/',
      year: '2015',
    },
    {
      authors:
        'Paul Fearnhead, Christopher Nemeth, Chris J. Oates, and Chris Sherlock',
      title: 'Scalable Monte Carlo for Bayesian Learning',
      title_url: 'https://arxiv.org/abs/2407.12751',
      year: '2024',
    },
  ];

  at = [
    {
      authors: 'Allen Hatcher',
      title: 'Algebraic Topology',
      title_url: 'https://pi.math.cornell.edu/~hatcher/AT/ATpage.html',
      year: '2002',
    },
    {
      authors: 'Michael Starbird and Francis Su',
      title: 'Topology Through Inquiry',
      title_url: 'https://math.hmc.edu/su/topology-through-inquiry/',
      year: '2019',
    },
  ];

  cat = [
    {
      authors: 'Tamal Dey and Yusu Wang',
      title: 'Computational Topology for Data Analysis',
      title_url:
        'https://www.cs.purdue.edu/homes/tamaldey/book/CTDAbook/CTDAbook.html',
      year: '2021',
    },
    {
      authors: 'Steve Oudot',
      title: 'Persistence Theory: From Quiver Representations to Data Analysis',
      title_url:
        'https://geometrica.saclay.inria.fr/team/Steve.Oudot/books/o-pt-fqrtda-15/surv-209.pdf',
      year: '2015',
    },
  ];

  homological_algebra = [
    {
      authors: 'Joseph Rotman',
      title: 'An Introduction to Homological Algebra',
      title_url: 'https://link.springer.com/book/10.1007/b98977',
      year: '2009',
    },
    {
      authors: 'Charles Weibel',
      title: 'An introduction to homological algebra',
      title_url: 'https://doi.org/10.1017/CBO9781139644136',
      year: '1994',
    },
  ];

  toc = [
    {
      authors: 'Avi Wigderson',
      title: 'Math and Computation',
      title_url: 'https://www.math.ias.edu/avi/book',
      year: '2019',
    },
    {
      authors: 'Cris Moore and Stephan Mertens',
      title: 'The Nature Of Computation',
      title_url: 'http://nature-of-computation.org/',
      year: '2011',
    },
  ];

  optimization = [
    {
      authors: 'Stephen Boyd and Lieven Vandenberghe',
      title: 'Convex Optimization',
      title_url: 'https://web.stanford.edu/~boyd/cvxbook/',
      year: '2004',
    },
    // {
    //   authors: 'Shai Shalev-Shwartz and Shai Ben-David',
    //   title: 'Understanding Machine Learning',
    //   title_url: 'https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/',
    //   year: '2014'
    // },
    {
      authors: 'Amir Beck',
      title: 'First-Order Methods in Optimization',
      title_url: 'https://epubs.siam.org/doi/10.1137/1.9781611974997',
      year: '2017',
    },
  ];

  category_theory = [
    {
      authors: 'Emily Riehl',
      title: 'Category Theory in Context',
      title_url: 'https://math.jhu.edu/~eriehl/context/',
      year: '2016',
    },
    {
      authors: 'Tom Leinster',
      title: 'Basic Category Theory',
      title_url: 'https://www.maths.ed.ac.uk/~tl/bct/',
      year: '2014',
    },
  ];

  hdp = [
    {
      authors: 'Roman Vershynin',
      title: 'High-Dimensional Probability',
      title_url:
        'https://www.math.uci.edu/~rvershyn/papers/HDP-book/HDP-book.html',
      year: '2018',
    },
  ];

  embeddings = [
    {
      authors: 'Jiří Matoušek',
      title: 'Lecture notes on metric embeddings',
      title_url: 'https://kam.mff.cuni.cz/~matousek/ba-a4.pdf',
      year: '2013',
    },
    {
      authors: 'Akshay Agrawal, Alnur Ali, Stephen Boyd',
      title: 'Minimum-Distortion Embedding',
      title_url: 'https://arxiv.org/abs/2103.02559',
      year: '2021',
    },
    {
      authors: 'Various authors',
      title: 'Advances on Metric Embeddings (FOCS 2022 Workshop)',
      title_url: 'https://hackmd.io/@3S70qBUwTR6_CErLY2dm4A/SJfp46KGi',
      year: '2022',
    },
  ];
  // mf = [
  //   {
  //     authors: 'Igor Carron',
  //     title: 'The Advanced Matrix Factorization Jungle',
  //     title_url: 'https://sites.google.com/site/igorcarron2/matrixfactorizations',
  //     year: '2013'
  //   },
  // ];

  // mod = [
  //   {
  //     authors: 'Avrim Blum, John Hopcroft, and Ravi Kannan',
  //     title: 'Foundations of Data Science',
  //     title_url: 'https://home.ttic.edu/~avrim/book.pdf',
  //     year: '2020'
  //   },
  // ];
  deep_learning = [
    {
      authors: 'Chris Bishop and Hugh Bishop',
      title: 'Deep Learning: Foundations and Concepts',
      title_url: 'http://www.bishopbook.com/',
      year: '2024',
    },
    {
      authors: 'Simon J.D. Prince',
      title: 'Understanding Deep Learning',
      title_url: 'https://udlbook.github.io/udlbook/',
      year: '2023',
    },
  ];

  differential_geometry = [
    {
      authors: 'Tristan Needham',
      title: 'Visual Differential Geometry and Forms',
      title_url: 'https://www.vdgf.space/',
      year: '2021',
    },
    {
      authors: 'Victor Guillemin and Alan Pollack',
      title: 'Differential Topology',
      title_url: 'https://bookstore.ams.org/chel-370-h',
      year: '1974',
    },
  ];

  parametrized_complexity = [
    {
      authors: 'Rod Downey and Mike Fellows',
      title: 'Fundamentals of Parameterized Complexity',
      title_url: 'https://www.springer.com/us/book/9781447155584',
      year: '2013',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
