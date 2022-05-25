import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckClass } from 'src/app/model/CheckClass';
import { HomeItem } from 'src/app/model/homeItem';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  public homeitems$: Observable<HomeItem[]>;
  p: number = 1;
  
  constructor(private ser: HomeService, public check:CheckClass) { }

  ngOnInit(): void {
    this.homeitems$ = this.ser.getHomeItems();
  }

}
