import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadLaunches } from '../store/launch/launch.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css']
})
export class LaunchPageComponent implements OnInit {
  launch$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<State>) {
    this.store.dispatch(new LoadLaunches());
  }

  ngOnInit() {
    // Since the user won't navigate from a status to another
    // status we could use this.activateRoute.snapshot

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        console.log('Launch page param:', params);

        this.launch$ = this.store.select('launch').pipe(
          map(st => st.launches.find(launch => launch['id'] === +params.get('id')))
        );
      });
  }

}
