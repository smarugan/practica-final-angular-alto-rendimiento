import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { MissionTypeActionTypes, LoadedMissionTypes, ErrHttpMissionType } from './mission-type.actions';
import { switchMap, catchError, map } from 'rxjs/operators';


@Injectable()
export class MissionTypeEffects {

  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  loadMissionTypes$: Observable<Action> = this.actions$.pipe(
    ofType(MissionTypeActionTypes.LoadMissionTypes),
    switchMap(() => this.apiService.getMissionTypes$().pipe(  // swiwtchMap -> do the call and returns a new observable
      map(missionTypes => new LoadedMissionTypes(missionTypes)),
      catchError(err => of(new ErrHttpMissionType(err))) // catchError on getMissionTypes$ needs return an observable (use of operator)
    ))
  );
}
