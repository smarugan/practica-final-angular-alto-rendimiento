import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Since the user won't navigate from a status to another
    // status we could use this.activateRoute.snapshot

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        console.log(params.get('name'));
      });
  }

}
