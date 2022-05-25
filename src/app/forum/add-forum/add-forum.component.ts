import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClass } from 'src/app/model/CheckClass';
import { ForumTheme } from 'src/app/model/forumTheme';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {

  date = new Date();
  str:string;
  public username:string;

  constructor(private ser: ForumService, private router: Router,public check:CheckClass) { }

  ngOnInit(): void {
    this.str = this.date.toLocaleDateString("en-US");
    this.check.setUsername();
    this.username = this.check.getUsername();
  }

  createEvent(eventForm) {

    const item: ForumTheme = eventForm.value.event;
    item.date = this.str;
    item.accountName = this.username;
    this.ser.addForumItem(item).subscribe((res) => {
      console.log("ADD ", item, " res: ", res)
      alert("theme created");
      this.router.navigate(['/forum']);
    });




  }

}
