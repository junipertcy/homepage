import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkItemComponent } from 'src/app/@components/link-item/link-item.component';


@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [CommonModule, LinkItemComponent],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {
  workshopList = [
    {
      link: "https://sites.google.com/view/grwc/grwc?authuser=0",
      title: "Graduate Research Workshop in Combinatorics.",
      author: "For grad students and postdocs.",
      publication: "Annually in June.",
      desc: "This workshop has a track record of delivering a 50 percent success " +
        "rate in turning select projects into papers, thanks to <a href='https://sites.google.com/view/grwc/details?authuser=0'>a model</a> " +
        "that produce a detailed and reliable plan. They also have a good list of <a href='https://sites.google.com/view/grwc/problem-garden?authuser=0'>open problems</a>."
    },
  ];
}
