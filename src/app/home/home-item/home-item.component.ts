import { Component, Input, OnInit } from '@angular/core';
import { HomeItem } from 'src/app/model/homeItem';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input() public homeItem: HomeItem; 

  constructor() { }

  ngOnInit(): void {

  }

}
