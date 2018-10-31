import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadStatuses } from '../store/status/status.actions';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  statuses$: Observable<any[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new LoadStatuses());
  }

  ngOnInit() {
    this.statuses$ = this.store.select('status').pipe(
      map(st => st.statuses)
    );
  }

}
