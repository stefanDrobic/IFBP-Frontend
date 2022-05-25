import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeItem } from '../model/homeItem';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  host = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }


  getHomeItems(): Observable<HomeItem[]> {
    return this.httpClient.get<HomeItem[]>(this.host + "api/homeItems");
  }
  getHomeItem(name:string): Observable<HomeItem> {
    return this.httpClient.get<HomeItem>(this.host + 'api/homeItems/' + name);
  }

  addHomeItem(event: HomeItem): Observable<HomeItem> {
    return this.httpClient.post<HomeItem>(this.host + "api/homeItems", event)
  }



}
