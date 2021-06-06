import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DailyService } from './services/daily.service';
import { dailyscrums } from './dailyscrum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'goal-planner';

  dailyscrums = dailyscrums;

constructor(private router: Router) { }



}

