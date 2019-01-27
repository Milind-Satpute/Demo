import { Component, OnInit, inject, Input } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { detailsData } from '../detailsdata';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  observeData: Observable<detailsData[]>;
  detData: detailsData[];
  heroes: detailsData[] = [];
  qsparam: any;
  id: any;
  constructor(
    private demoservice: DemoserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.qsparam = params['id'];
    });
  }
}
