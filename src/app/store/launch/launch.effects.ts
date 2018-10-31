import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { LaunchActionTypes, LoadedLaunches, ErrHttpLaunches } from './launch.actions';
import { ApiService } from 'src/app/services/api.service';
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class LaunchEffects {

  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  loadLaunches$: Observable<Action> = this.actions$.pipe(
    ofType(LaunchActionTypes.LoadLaunches),
    switchMap(() => this.apiService.getLaunches$().pipe( // swiwtchMap -> do the call and returns a new observable
      map(launches => new LoadedLaunches(launches)),
      catchError(err => of(new ErrHttpLaunches(err))) // catchError on getLaunches$ needs return an observable (use of operator)
    )
  ));
}
