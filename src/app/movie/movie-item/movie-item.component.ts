import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie} from 'src/app/model/movie';
import 'rxjs/add/operator/first';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent  {


  @Input() public movie: Movie; 

  constructor(private movieService: MovieService, private router: Router) { }



}
