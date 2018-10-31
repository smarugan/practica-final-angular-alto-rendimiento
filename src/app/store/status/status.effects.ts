import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { StatusActionTypes, LoadedStatuses, ErrHttpStatuses } from './status.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class StatusEffects {

  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  loadStatuses$: Observable<Action> = this.actions$.pipe(
    ofType(StatusActionTypes.LoadStatuses),
    switchMap(() => this.apiService.getStatusTypes$().pipe( // swiwtchMap -> do the call and returns a new observable
      map(statuses => new LoadedStatuses(statuses)),
      catchError(err => of(new ErrHttpStatuses(err))) // catchError on getStatusTypes$ needs return an observable (use of operator)
    ))
  );
}
