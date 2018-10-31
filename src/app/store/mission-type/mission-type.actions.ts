import { Action } from '@ngrx/store';

export enum MissionTypeActionTypes {
  LoadMissionTypes = '[MissionType] Load MissionTypes',
  LoadedMissionTypes = '[MissionType] Loaded MissionType',
  ErrHttpMissionType = '[MissionType] Error http'
}

export class LoadMissionTypes implements Action {
  readonly type = MissionTypeActionTypes.LoadMissionTypes;
}

export class LoadedMissionTypes implements Action {
  readonly type = MissionTypeActionTypes.LoadedMissionTypes;

  constructor(readonly payload: any) {}
}

export class ErrHttpMissionType implements Action {
  readonly type = MissionTypeActionTypes.ErrHttpMissionType;

  constructor(readonly payload: any) {}
}

export type MissionTypeActions = LoadMissionTypes | LoadedMissionTypes | ErrHttpMissionType;
