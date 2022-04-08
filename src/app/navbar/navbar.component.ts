import { Component, OnInit } from '@angular/core';
import { CheckClass } from '../model/CheckClass';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public check:CheckClass) { }

  ngOnInit(): void {
  }


}
