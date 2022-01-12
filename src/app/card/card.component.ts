import { Component, OnInit } from '@angular/core';
import { Astro } from '../astro';
import { AstroService } from '../astro.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  type!: string;
  currentRoute!: string;
  astro!: Astro;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private dataSvc: AstroService
  ) {
    console.log(route);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.type = params['type'];
      console.log(this.type);
    });

    this.dataSvc.getOneAstro(this.type).subscribe((data) => {
      this.astro = data;
      console.log(data);
    });
  }
}
