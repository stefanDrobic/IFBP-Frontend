import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumTheme } from '../model/forumTheme';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

 
  host = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }
 

  getForumItems(query: string): Observable<ForumTheme[]> {
    return this.httpClient.get<ForumTheme[]>(this.host + "api/forum", {
      params: { q: query }
    })
  }

  getForumItem(name:string): Observable<ForumTheme> {
    return this.httpClient.get<ForumTheme>(this.host + 'api/forum/' + name);
  }

  addForumItem(event: ForumTheme): Observable<ForumTheme> {
    console.log("SSS ", event)
    return this.httpClient.post<ForumTheme>(this.host + "api/forum", event)
  }

}
