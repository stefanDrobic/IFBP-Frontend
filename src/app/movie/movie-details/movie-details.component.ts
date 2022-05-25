import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { CheckClass } from 'src/app/model/CheckClass';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  public movie: Movie;
  public safeSrc: SafeResourceUrl;
  
  rating3: number;


  constructor(private movieService: MovieService,private check: CheckClass, private sanitizer: DomSanitizer, private route: ActivatedRoute) { 
    this.rating3 = 3;
  }
  

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.movieService.getMovie(name).subscribe(event => {this.movie= event; console.log("DDD", event)
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.ytUrl);});
    

  }

 

}
