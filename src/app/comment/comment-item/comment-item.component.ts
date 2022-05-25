import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CheckClass } from 'src/app/model/CheckClass';
import { CommentInterface } from 'src/app/model/commentInterface';
import { UserLoginComponent } from 'src/app/user/user-login/user-login.component';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() public comment: CommentInterface; 

  constructor() { }

  ngOnInit(): void {
      

  }

 

}
