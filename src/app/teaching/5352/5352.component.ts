import {
  Component,
  OnInit,
  ViewEncapsulation,
  TrackByFunction,
} from '@angular/core';
import { InternalUriResolverPipe } from 'src/app/@pipes/internal-uri-resolver.pipe';

export interface Week {
  active: boolean;
  name: string;
  disabled: boolean;
  pdfUrl?: string;
  content: string;
}

@Component({
  selector: 'app-teaching',
  standalone: false,
  templateUrl: './5352.component.html',
  styleUrls: ['./5352.component.css'],
  encapsulation: ViewEncapsulation.None, // Disables view encapsulation
})
export class TeachingComponent5352 implements OnInit {
  private str2IntRes: InternalUriResolverPipe = new InternalUriResolverPipe();

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

  allExpanded: boolean = false;

  toggleAllPanels(): void {
    this.allExpanded = !this.allExpanded;
    this.weeks.forEach((week) => (week.active = this.allExpanded));
  }

  trackWeek: TrackByFunction<Week> = (index: number, week: Week) => {
    return week.name;
  };

  wk1: string = `
  <div class="stylish-content">
<div>
    Tu: syllabus (“Easter Egg”) & course logistics. 
  From past installments, examples of what was successful & what was challenging. 
  Then we did self-intro: 
  (1) name, pronouns, dept; 
  (2) motivation; 
  (3) which part of course most looking forward to?
    </div>
    
    <div>
    Th: network representation, notations
    </div>
  </div>
`;

  wk2: string = `
  <div class="stylish-content">
    <div>
    </div>

    <div>
    </div>
  </div>
`;

  wk3: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk4: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;
  wk5: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk6: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;
  wk7: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk8: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;
  wk9: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk10: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk12: string = `
  <div class="stylish-content">
    <div>
      On Tuesday, we explored ideas for ranking node importance in networks.
      We discussed structural centralities and dynamical centralities.
      One takeaway is that, often, a structural centrality is a (cheaper) proxy for the importance of a node in some dynamical phenomenon.
    </div>

    <div>
      On Thursday, Prof. Dan Larremore came to give a guest lecture on Linear Hierarchies in Complex Networks.
    </div>
  </div>

`;

  wk13: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk14: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  wk15: string = `
<div class="stylish-content">
  <div>
  </div>

  <div>
  </div>
</div>
`;

  customStyle = {
    background: 'transparent',
    'border-radius': '4px',
    'margin-bottom': '-20px',
    'margin-top': '-20px',
    border: '0px',
  };

  weeks: Week[] = [
    {
      active: false,
      name: 'Week 1: Fundamentals of networks',
      disabled: false,
      pdfUrl: '5352_wk1',
      content: this.wk1,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 2: Summary statistics',
      pdfUrl: '5352_wk2',
      content: this.wk2,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 3: Random graphs with homogeneous degrees',
      pdfUrl: '5352_wk3',
      content: this.wk3,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 4: Random graphs with heterogeneous degrees',
      pdfUrl: '5352_wk4',
      content: this.wk4,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 5: Network prediction: node attributes',
      pdfUrl: '5352_wk5',
      content: this.wk5,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 6: Network prediction: missing links',
      pdfUrl: '5352_wk6',
      content: this.wk6,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 7: Community structure and mixing patterns',
      pdfUrl: '5352_wk7',
      content: this.wk7,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 8: Community structure models',
      pdfUrl: '5352_wk8',
      content: this.wk8,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 9: Spreading processes and cascades',
      pdfUrl: '5352_wk9',
      content: this.wk9,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 10: Spreading processes with structure',
      pdfUrl: '5352_wk10',
      content: this.wk10,
    },
    {
      active: false,
      disabled: true,
      name: 'Week 11: Spring break',
      pdfUrl: '',
      content: '',
    },
    {
      active: false,
      disabled: false,
      name: 'Week 12: Ranking in networks',
      pdfUrl: '5352_wk12',
      content: this.wk12,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 13: Network sampling & Network growth models',
      pdfUrl: '5352_wk13',
      content: this.wk13,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 14: Higher-order networks',
      pdfUrl: '5352_wk14',
      content: this.wk14,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 15: Ethics in network science & Project presentations',
      pdfUrl: '',
      content: this.wk15,
    },
    {
      active: false,
      disabled: false,
      name: 'Week 16: Project presentations',
      pdfUrl: '',
      content: '',
    },
  ];
  expandIconPosition: 'start' | 'end' = 'start';

  openPDFInNewTab(event: Event, pdfUrl: any): void {
    event.stopPropagation();
    const url = this.str2IntRes.transform(pdfUrl);
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit() {}
}
