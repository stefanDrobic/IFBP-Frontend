import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';

import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { CheckClass } from 'src/app/model/CheckClass';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies$: Observable<Movie[]>;
  public searchTerm: string = '';
  public movies2$: Movie[];

  p: number = 1;

  private searchSubject: Subject<string> = new Subject();
  private reloadEventList: Subject<void> = new Subject(); 

  constructor(private eventService: MovieService, public check:CheckClass) { }
  ngOnInit() {

    this.movies$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadEventList)
      .switchMap((query) => this.eventService.getMovies(this.searchTerm));



  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  fun(name:string){
    this.movies$ = this.eventService.getMovieByGenre(name);
  }



}
