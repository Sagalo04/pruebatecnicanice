import { Injectable } from '@angular/core';
import { Astro } from './astro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AstroService {
  private urlAPIAll = 'https://pruebabackend-nicepeople.herokuapp.com/alldata';
  private urlAPI = 'https://pruebabackend-nicepeople.herokuapp.com/data/';

  constructor(private http: HttpClient) {}

  getAllAstros(): Observable<Astro[]> {
    return this.http.get<Astro[]>(this.urlAPIAll);
  }

  getOneAstro(titulo: string): Observable<Astro> {
    return this.http.get<Astro>(this.urlAPI + titulo);
  }
}
