import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../model/commentInterface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  host = "http://localhost:3000/";


  addComment(event: CommentInterface): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(this.host + "api/comments", event)
  }

  getCommentsByName(name:string): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(this.host + 'api/comments/' + name);
  } 

}
