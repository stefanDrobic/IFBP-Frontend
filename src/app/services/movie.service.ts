import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient: HttpClient) { }

  //host = "http://localhost:8080/ifbp/movie/";
 
  host = "http://localhost:3000/";


  getMovies(query: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.host + "api/events", {
      params: { q: query }
    })
  }
  
  getMovie(name:string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.host + 'api/events/' + name);
  }

  getMovieByGenre(name:string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.host + 'api/events/genres/' + name);
  }


  addMovie(event: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.host + "api/events", event)
  }




}
