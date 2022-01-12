import { Component, OnInit } from '@angular/core';
import { AstroService } from '../astro.service';
import { Astro } from '../astro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataSvc: AstroService) {}
  filterastro = '';
  filteretiqueta = '';
  astros!: any[];
  visited!: boolean;
  ngOnInit(): void {
    this.dataSvc.getAllAstros().subscribe((data) => {
      this.astros = data;
      console.log(data);
    });
  }
}
