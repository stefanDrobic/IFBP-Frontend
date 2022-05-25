import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeItem } from 'src/app/model/homeItem';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  public homeItem1: HomeItem;
  public safeSrc: SafeResourceUrl;

  constructor(private ser: HomeService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    this.ser.getHomeItem(name).subscribe(event => {this.homeItem1= event[0];
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.homeItem1.ytUrl);
    });
      
  }

}
