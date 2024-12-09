import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkItemComponent } from 'src/app/@components/link-item/link-item.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, LinkItemComponent],
  templateUrl: './resources.component.html',
  styleUrls: [
    './resources.component.css',
  ]
})
export class ResourcesComponent {
  dummyList1 = [
    {
      link: "http://www.math.ucsd.edu/~fan/teach/gradpol.html",
      title: "A few words on research for graduate students.",
      author: "By Fan Chung.",
      publication: ""
    }
  ]

  dummyList2 = [
    {
      link: "https://journals.biologists.com/jcs/article/121/11/1771/30038/The-importance-of-stupidity-in-scientific-research",
      title: "The importance of stupidity in scientific research.",
      author: "By Martin Schwartz.",
      publication: "J Cell Sci (2008)."
    },
    {
      link: "https://www.cell.com/molecular-cell/fulltext/S1097-2765(09)00641-8",
      title: "How To Choose a Good Scientific Problem.",
      author: "By Uri Alon.",
      publication: "Molecular Cell (2009)."
    },
    {
      link: "https://www.nature.com/articles/s41390-022-01950-y.pdf",
      title: "Doing a PhD: ten golden rules.",
      author: "By E. J. Molloy & C. F. Bearer.",
      publication: "Pediatric Research (2023)."
    }
  ];
}
