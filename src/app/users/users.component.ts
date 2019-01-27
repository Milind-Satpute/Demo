import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { Observable } from 'rxjs';
import { detailsData } from '../detailsdata';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  observeData: Observable<detailsData[]>;
  detData: detailsData[];
  heroes: detailsData[] = [];
  searchData: detailsData[] = [];
  searchword = new FormControl('');
  constructor(private demoservice: DemoserviceService) {}

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.demoservice.getData().subscribe(heroes => (this.heroes = heroes));
  }
  Search() {
    this.demoservice
      .getData()
      .subscribe(heroes =>
        (this.searchData = heroes).filter(item =>
          this.searchData.indexOf(this.searchword.value.toLowerCase())
        )
      );
  }
}
