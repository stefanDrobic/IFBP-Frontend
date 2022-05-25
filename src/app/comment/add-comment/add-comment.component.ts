import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckClass } from 'src/app/model/CheckClass';
import { CommentInterface } from 'src/app/model/commentInterface';
import { CommentService } from 'src/app/services/comment.service';
import { CommentItemComponent } from '../comment-item/comment-item.component';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

   date = new Date();
   str:string;
   public username:string;
   private movieName:string;
   name:string;


  constructor(private commentService: CommentService, private router: Router, public check:CheckClass, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.str = this.date.toLocaleDateString("en-US");
    console.log(this.str);
    this.check.setUsername();
    this.username = this.check.getUsername();
    this.movieName = this.route.snapshot.paramMap.get('name');

  }


  createEvent(eventForm) {
    const comm: CommentInterface = eventForm.value.event;
    comm.date = this.str;
    comm.movieName = this.movieName;
    comm.name = this.username;
    if (localStorage.getItem('token')) {
      this.commentService.addComment(comm).subscribe((res) => {
         this.router.navigate(['event/'+this.movieName]);
      })
    }
    else{
      console.log("create comm error");
    }
  }

  reload(){
    window.location.reload();
  }


}



