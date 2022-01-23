import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { YiRService } from '../yi-r.service';
import { YiR } from '../yi-r';

@Component({
  selector: 'app-yi-r-detail',
  templateUrl: './yi-r-detail.component.html',
  styleUrls: ['./yi-r-detail.component.css']
})
export class YiRDetailComponent implements OnInit {
  YiR$!: Observable<YiR[]>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: YiRService
  ) {}

  ngOnInit(): void {

    this.YiR$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')!))
    );

  }

}
