import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromLaunch from './launch/launch.reducer';
import * as fromMissionType from './mission-type/mission-type.reducer';

export interface State {
  status: fromStatus.State;
  launch: fromLaunch.State;
  missionType: fromMissionType.State;
}

export const reducers: ActionReducerMap<State> = {
  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
  missionType: fromMissionType.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
