import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeItem } from 'src/app/model/homeItem';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-add-home-item',
  templateUrl: './add-home-item.component.html',
  styleUrls: ['./add-home-item.component.css']
})
export class AddHomeItemComponent implements OnInit {

  mess;

  constructor(private ser: HomeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createEvent(eventForm) {
    
    const item: HomeItem = eventForm.value.event;
    if (item.imageUrl === item.ytUrl) {
      this.mess = "Image Url and youtube Url must not be the same.";
    }

    else {
      this.ser.addHomeItem(item).subscribe((res) => {
        alert("topic created");
        this.router.navigate(['/home']);
      });


    }

  }
}
