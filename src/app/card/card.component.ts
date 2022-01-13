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
  today = new Date();
  date!: Date;
  pass!: boolean
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private dataSvc: AstroService
  ) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.type = params['type'];
    });

    this.dataSvc.getOneAstro(this.type).subscribe((data) => {
      this.astro = data;
      var aux = data.fechaL; 
      this.date = new Date(+(aux.split("/")[2]),+aux.split("/")[0]-1,+aux.split("/")[1])
    });
  }
}
