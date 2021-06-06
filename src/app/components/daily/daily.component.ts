import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Dailyscrum, dailyscrums } from '../../dailyscrum';



@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  dailyscrum: Dailyscrum|undefined;



  constructor(private route: ActivatedRoute, private router: Router) { }



ngOnInit() {


  // First get the dailyscrum id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const dailyscrumIdFromRoute = Number(routeParams.get('dailyscrumId'));

  // Find the dailyscrum that correspond with the id provided in route.
  this.dailyscrum = dailyscrums.find(dailyscrum => dailyscrum.id === dailyscrumIdFromRoute);




}



}
