import { Component, OnInit } from '@angular/core';
import { AstroService } from '../astro.service';
import { Astro } from '../astro';
import { FilterPipe } from '../pipes/filter.pipe';
import { findIndex } from 'rxjs';
import { NgForOf, NgForOfContext } from '@angular/common';
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
  a!: number
  ngOnInit(): void {
    this.dataSvc.getAllAstros().subscribe((data: any[]) => {
      this.astros = data;
    });
  }
}
