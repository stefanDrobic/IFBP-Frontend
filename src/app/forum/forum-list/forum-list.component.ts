import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CheckClass } from 'src/app/model/CheckClass';
import { ForumTheme } from 'src/app/model/forumTheme';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {

  public themes$: Observable<ForumTheme[]>;
  public searchTerm: string = '';
  private searchSubject: Subject<string> = new Subject();
  private reloadEventList: Subject<void> = new Subject(); 
  p: number = 1;

  constructor(private eventService: ForumService, public check:CheckClass) { }

  ngOnInit(): void {
    
    this.themes$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadEventList)
      .switchMap((query) => this.eventService.getForumItems(this.searchTerm));
      console.log("LISTT ", this.themes$)
  }

  search() {
    this.searchSubject.next(this.searchTerm);
    console.log(this.searchSubject);
  }

}
