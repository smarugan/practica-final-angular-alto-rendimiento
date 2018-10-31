import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadLaunches } from '../store/launch/launch.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {
  launches$: Observable<any[]>;
  order = [];

  constructor(private activatedRoute: ActivatedRoute, private store: Store<State>) {
    this.store.dispatch(new LoadLaunches());
  }

  ngOnInit() {
    // Since the user won't navigate from a status to another
    // status we could use this.activateRoute.snapshot

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        console.log('Status page param:', params);

        this.launches$ = this.store.select('launch').pipe(
          map(st => st.launches.filter(launch => launch['status'] === +params.get('id')))
        );
      });
  }

  older() {
    this.launches$ = this.launches$.pipe(
      map(launches => launches.sort((a, b) => a.net > b.net ? 1 : -1))
    );
  }

  newer() {
    this.launches$ = this.launches$.pipe(
      map(launches => launches.sort((a, b) => a.net > b.net ? -1 : 1))
    );
  }

}
