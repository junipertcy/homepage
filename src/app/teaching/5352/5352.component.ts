import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-teaching',
  standalone: false,
  templateUrl: './5352.component.html',
  styleUrls: ['./5352.component.css']
})
export class TeachingComponent5352 implements OnInit {
  // nodes = [
  //   {
  //     title: 'parent 1',
  //     key: '100',
  //     expanded: true,
  //     icon: 'smile',
  //     children: [
  //       { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
  //       { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
  //     ]
  //   }
  // ];
  week_1 = [
    {
      title: 'Week 1: Fundamentals of networks',
      key: '100',
      expanded: false,
      children: [
        {
          title: 'syllabus, course logistics, and self-intro',
          key: '1001',
          expanded: false,
          children: [
            { title: 'From past installments, examples of <i>what was successful</i> & <i>what was challenging</i>', key: '10010', isLeaf: true },
            { title: 'Self-intro: (1) name, pronouns, dept; (2) motivation; (3) which part of course most looking forward to?', key: '10011', isLeaf: true },
            { title: 'Syllabus “Easter Egg”', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'network representation, notations',
          key: '1002',
          // children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
  week_2 = [
    {
      title: 'Week 2: Summary statistics',
      key: '200',
      expanded: false,
      children: [
        {
          title: 'degree, degree distribution, reciprocity, CCDF for scale-free networks',
          key: '2001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '10010', isLeaf: true },
            // { title: 'leaf', key: '10011', isLeaf: true },
            // { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'clustering coefficient (▲), feed-forward / feedback loops, larger motifs (⊓, ☒), positional measures (diameter, eccentricity), small-world property',
          key: '2002',
          // children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
  week_3 = [
    {
      title: 'Week 3: Random graphs with homogeneous degrees',
      key: '300',
      expanded: false,
      children: [
        {
          title: 'Four genres: Erdős–Rényi, configuration, modular, latent space; properties about ER graphs; their degree distribution is Poisson',
          key: '3001',
          expanded: false,
          children: [
            // { title: 'Four genres: Erdős–Rényi, configuration, modular, latent space', key: '30010', isLeaf: true },
          ]
        },
        {
          title: 'Reciprocity, clustering coeff of ER graphs; phase transition wrt. avg degs; small-world property',
          key: '3002',
          // children: [{ title: 'leaf', key: '30020', isLeaf: true }]
        }
      ]
    }
  ];
  week_4 = [
    {
      title: 'Week 4: Random graphs with heterogeneous degrees',
      key: '400',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '4001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '40010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '4002',
          // children: [{ title: 'leaf', key: '40020', isLeaf: true }]
        }
      ]
    }
  ];
  week_5 = [
    {
      title: 'Week 5: Network prediction: node attributes',
      key: '500',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '5001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '50010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '5002',
          // children: [{ title: 'leaf', key: '50020', isLeaf: true }]
        }
      ]
    }
  ];
  week_6 = [
    {
      title: 'Week 6: Network prediction: missing links',
      key: '600',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '6001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '60010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '6002',
          // children: [{ title: 'leaf', key: '60020', isLeaf: true }]
        }
      ]
    }
  ];
  week_7 = [
    {
      title: 'Week 7: Community structure and mixing patterns',
      key: '700',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '7001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '70010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '7002',
          // children: [{ title: 'leaf', key: '70020', isLeaf: true }]
        }
      ]
    }
  ];
  week_8 = [
    {
      title: 'Week 8: Community structure models',
      key: '800',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '8001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '80010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '8002',
          // children: [{ title: 'leaf', key: '80020', isLeaf: true }]
        }
      ]
    }
  ];
  week_9 = [
    {
      title: 'Week 9: Spreading processes and cascades',
      key: '900',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '9001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '90010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '9002',
          // children: [{ title: 'leaf', key: '90020', isLeaf: true }]
        }
      ]
    }
  ];
  week_10 = [
    {
      title: 'Week 10: Spreading processes with structure',
      key: '1000',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '10001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '100010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '10002',
          // children: [{ title: 'leaf', key: '100020', isLeaf: true }]
        }
      ]
    }
  ];
  week_11 = [
    {
      title: 'Week 11: Spring break',
      key: '1100',
      expanded: false,
    }
  ];
  week_12 = [
    {
      title: 'Week 12: Ranking in networks',
      key: '1200',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '12001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '120010', isLeaf: true },
          ]
        },
        {
          title: 'Guest Lecture: Prof. Dan Larremore, "Linear Hierarchies in Complex Networks"',
          key: '12002',
          // children: [{ title: 'leaf', key: '120020', isLeaf: true }]
        }
      ]
    }
  ];
  week_13 = [
    {
      title: 'Week 13: Network data incompleteness and sampling',
      key: '1300',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '13001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '130010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '13002',
          // children: [{ title: 'leaf', key: '130020', isLeaf: true }]
        }
      ]
    }
  ];
  week_14 = [
    {
      title: 'Week 14: Higher-order networks & Ethics in network science',
      key: '1400',
      expanded: false,
      children: [
        {
          title: 'TBD',
          key: '14001',
          expanded: false,
          children: [
            // { title: 'leaf', key: '140010', isLeaf: true },
          ]
        },
        {
          title: 'TBD',
          key: '14002',
          // children: [{ title: 'leaf', key: '140020', isLeaf: true }]
        }
      ]
    }
  ];
  week_15 = [
    {
      title: 'Week 15: Project presentations',
      key: '1500',
      expanded: false,
      // children: [
      //   {
      //     title: 'TBD',
      //     key: '15001',
      //     expanded: false,
      //     children: [
      //       // { title: 'leaf', key: '150010', isLeaf: true },
      //     ]
      //   },
      //   {
      //     title: 'TBD',
      //     key: '15002',
      //     // children: [{ title: 'leaf', key: '150020', isLeaf: true }]
      //   }
      // ]
    }
  ];
  week_16 = [
    {
      title: 'Week 16: Project presentations',
      key: '1600',
      expanded: false,
      // children: [
      //   {
      //     title: 'TBD',
      //     key: '16001',
      //     expanded: false,
      //     children: [
      //       // { title: 'leaf', key: '160010', isLeaf: true },
      //     ]
      //   },
      //   {
      //     title: 'TBD',
      //     key: '16002',
      //     // children: [{ title: 'leaf', key: '160020', isLeaf: true }]
      //   }
      // ]
    }
  ];





  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
