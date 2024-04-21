import { Component, OnInit } from '@angular/core';
import { InternalUriResolverPipe } from 'src/app/@pipes/internal-uri-resolver.pipe';


@Component({
  selector: 'app-teaching',
  standalone: false,
  templateUrl: './5352.component.html',
  styleUrls: ['./5352.component.css'],
})


export class TeachingComponent5352 implements OnInit {
  private str2IntRes: InternalUriResolverPipe = new InternalUriResolverPipe();
  // week_1 = [
  //   {
  //     title: 'Week 1: Fundamentals of networks',
  //     scribbles: '/assets/pdf/teaching/5352/scribbles/csci5352_S24_L1b_scribbles.pdf',
  //     key: '100',
  //     expanded: false,
  //     children: [
  //       {
  //         title: 'syllabus, course logistics, and self-intro',
  //         key: '1001',
  //         expanded: false,
  //         children: [
  //           { title: 'From past installments, examples of what was successful & what was challenging', key: '10010', isLeaf: true },
  //           { title: 'Self-intro: (1) name, pronouns, dept; (2) motivation; (3) which part of course most looking forward to?', key: '10011', isLeaf: true },
  //           { title: 'Syllabus “Easter Egg”', key: '10012', isLeaf: true }
  //         ]
  //       },
  //       {
  //         title: 'network representation, notations',
  //         key: '1002',
  //         // children: [{ title: 'leaf', key: '10020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];
  // week_2 = [
  //   {
  //     title: 'Week 2: Summary statistics',
  //     key: '200',
  //     expanded: false,
  //     children: [
  //       {
  //         title: 'degree, degree distribution, reciprocity, CCDF for scale-free networks',
  //         key: '2001',
  //         expanded: false,
  //         children: [
  //           // { title: 'leaf', key: '10010', isLeaf: true },
  //           // { title: 'leaf', key: '10011', isLeaf: true },
  //           // { title: 'leaf', key: '10012', isLeaf: true }
  //         ]
  //       },
  //       {
  //         title: 'clustering coefficient (▲), feed-forward / feedback loops, larger motifs (⊓, ☒), positional measures (diameter, eccentricity), small-world property',
  //         key: '2002',
  //         // children: [{ title: 'leaf', key: '10020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];
  // week_3 = [
  //   {
  //     title: 'Week 3: Random graphs with homogeneous degrees',
  //     key: '300',
  //     expanded: false,
  //     children: [
  //       {
  //         title: 'Four genres: Erdős–Rényi, configuration, modular, latent space; properties about ER graphs; their degree distribution is Poisson',
  //         key: '3001',
  //         isLeaf: true
  //       },
  //       {
  //         title: 'Reciprocity, clustering coeff of ER graphs; phase transition wrt. avg degs; small-world property',
  //         key: '3002',
  //         isLeaf: true
  //         // children: [{ title: 'leaf', key: '30020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];
  // week_4 = [
  //   {
  //     title: 'Week 4: Random graphs with heterogeneous degrees',
  //     key: '400',
  //     expanded: false,
  //     children: [
  //       {
  //         title: 'TBD',
  //         key: '4001',
  //         expanded: false,
  //         children: [
  //           // { title: 'leaf', key: '40010', isLeaf: true },
  //         ]
  //       },
  //       {
  //         title: 'TBD',
  //         key: '4002',
  //         // children: [{ title: 'leaf', key: '40020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];
  // week_5 = [
  //   {
  //     title: 'Week 5: Network prediction: node attributes',
  //     key: '500',
  //     expanded: true,
  //     children: [
  //       {
  //         title: 'Four types of predictions; correlation and sparsity; assortative mixing and local smoothing; measuring performance: confusion matrix',
  //         key: '5001',
  //         isLeaf: true,
  //         expanded: true,
  //       },
  //       {
  //         title: 'Advanced methods: Semi-supervised learning, graph convolutional networks, and more',
  //         key: '5002',
  //         isLeaf: true,
  //         expanded: true,
  //         // children: [{ title: 'leaf', key: '50020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];
  // week_6 = [
  //   {
  //     title: 'Week 6: Network prediction: missing links',
  //     key: '600',
  //     expanded: true,
  //     children: [
  //       {
  //         title: 'Predicting missing links; topological predictors and local smoothness; measuring performance: AUC; Three main classes of missing link predictors; ensemble learning',
  //         key: '6001',
  //         expanded: true,
  //         isLeaf: true
  //       },
  //       {
  //         title: 'Depth dive: Ghasemian et al. (PNAS 2020) & Peixoto and Kirkley (PRE 2023)',
  //         key: '6002',
  //         expanded: true,
  //         isLeaf: true
  //         // children: [{ title: 'leaf', key: '60020', isLeaf: true }]
  //       }
  //     ]
  //   }
  // ];

  wk12 = `
  On Tuesday, we explored ideas for ranking node importance in networks.
  We discussed structural centralities and dynamical centralities. 
  One takeaway is that, often, a structural centrality is a (cheaper) proxy for the importance of a node in some dyanmical phenomenon. 
  
  On Thursday, Prof. Dan Larremore came to give a guest lecture on Linear Hierarchies in Complex Networks.
  `;
  
  customStyle = {
    background: 'transparent',
    'border-radius': '4px',
    'margin-bottom': '-20px',
    'margin-top': '-20px',
    border: '0px'
  }

  weeks = [
    {
      active: false,
      name: 'Week 1: Fundamentals of networks',
      disabled: false,
      pdfUrl: "5352_wk1",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 2: Summary statistics',
      pdfUrl: "5352_wk2",
      content: ""

    },
    {
      active: false,
      disabled: false,
      name: 'Week 3: Random graphs with homogeneous degrees',
      pdfUrl: "5352_wk3",
      content: ""
      
    },
    {
      active: false,
      disabled: false,
      name: 'Week 4: Random graphs with heterogeneous degrees',
      pdfUrl: "5352_wk4",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 5: Network prediction: node attributes',
      pdfUrl: "5352_wk5",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 6: Network prediction: missing links',
      pdfUrl: "5352_wk6",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 7: Community structure and mixing patterns',
      pdfUrl: "5352_wk7",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 8: Community structure models',
      pdfUrl: "5352_wk8",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 9: Spreading processes and cascades',
      pdfUrl: "5352_wk9",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 10: Spreading processes with structure',
      pdfUrl: "5352_wk10",
      content: ""
    },
    {
      active: false,
      disabled: true,
      name: 'Week 11: Spring break',
      pdfUrl: "",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 12: Ranking in networks',
      pdfUrl: "5352_wk12",
      content: this.wk12
    },
    {
      active: false,
      disabled: false,
      name: 'Week 13: Network sampling & Network growth models',
      pdfUrl: "5352_wk13",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 14: Higher-order networks',
      pdfUrl: "5352_wk14",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 15: Ethics in network science & Project presentations',
      pdfUrl: "",
      content: ""
    },
    {
      active: false,
      disabled: false,
      name: 'Week 16: Project presentations',
      pdfUrl: "",
      content: ""
    }
  ];
  expandIconPosition: 'left' | 'right' = 'left';

  openPDFInNewTab(event: Event, pdfUrl: any): void {
    event.stopPropagation();
    const url = this.str2IntRes.transform(pdfUrl);
    window.open(url, '_blank');
  }

  constructor() {


  }

  ngOnInit() {
  }

}
