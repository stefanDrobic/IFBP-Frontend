import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumTheme } from 'src/app/model/forumTheme';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  public theme1: ForumTheme;

  constructor(private ser: ForumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    this.ser.getForumItem(name).subscribe(event => {this.theme1 = event[0]; console.log("III ", this.theme1)
    });
  }

}
