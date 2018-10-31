import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LoadedLaunches = '[Launch] Loaded Launches',
  ErrHttpLaunches = '[Launch] Error http'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LoadedLaunches implements Action {
  readonly type = LaunchActionTypes.LoadedLaunches;

  constructor(readonly payload: any) {}
}

export class ErrHttpLaunches implements Action {
  readonly type = LaunchActionTypes.ErrHttpLaunches;

  constructor(readonly payload: any) {}
}

export type LaunchActions = LoadLaunches | LoadedLaunches | ErrHttpLaunches;
