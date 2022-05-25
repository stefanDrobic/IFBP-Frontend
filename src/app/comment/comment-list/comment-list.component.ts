import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentInterface } from 'src/app/model/commentInterface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  public comments$:  Observable<CommentInterface[]>;
  p: number = 1;

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    this.comments$ = this.commentService.getCommentsByName(name);

  }
  

}
