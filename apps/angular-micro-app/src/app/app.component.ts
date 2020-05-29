import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-single-spa-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-micro-app';
  
  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {
    console.log('API URL: '+ environment.apiUrl);
  }
}
