import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {
  #http = inject(HttpClient);

  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key' : '5db21dbae3msh40179659bc249fcp1f3a13jsnb8bd39724c0f',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  });

  getMovies(title: string): Observable<Data<Movie>> {
    const url = `${this.apiUrl}?title=${title}`;
    return this.#http.get<Data<Movie>>(url, { headers: this.headers });
  }
}
