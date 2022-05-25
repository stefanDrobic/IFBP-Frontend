import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClass } from 'src/app/model/CheckClass';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  ganres = ["Action", "Adventure", "Animation", "Drama", "Comedy", "Crime", "Mistery"];
  ganres2 = [];
  mess;
  date;
  ytKey;
  

  constructor(private movieService: MovieService, private router: Router) { }
 
  ngOnInit(): void {
   this.date = new Date();
   this.date = this.date.getYear() +1900;
  }


  createEvent(eventForm) {
    const movie: Movie = eventForm.value.event;
    if (movie.imageUrl === movie.ytUrl) {
      this.mess = "Image Url and trailer Url must not be the same.";
    }

    else {
      movie.ganres = this.ganres2;
      this.ytKey = "https://www.youtube.com/embed/" + movie.ytUrl;
      movie.ytUrl = this.ytKey;
      console.log("ADADSSAS ", movie.ytUrl);
      if (localStorage.getItem('token')) {
        this.movieService.addMovie(movie).subscribe((res) => {
          alert("event created");
          this.router.navigate(['/event/list']);
        })
      }
      else
        console.log("create error");
    }

  }

  onClick($event) {
    var str = $event.target.value;
    var bool = $event.target.checked;
    if (bool) {
      this.ganres2.push(str);
    }
    else {
      const index = this.ganres.indexOf(str);
      this.ganres2.splice(index, 1);
    }
  }



}
