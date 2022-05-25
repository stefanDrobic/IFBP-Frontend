import { Component, Input, OnInit } from '@angular/core';
import { ForumTheme } from 'src/app/model/forumTheme';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.css']
})
export class ForumItemComponent implements OnInit {

  @Input() public forumTheme: ForumTheme; 

  constructor() { }

  ngOnInit(): void {
  }

}
