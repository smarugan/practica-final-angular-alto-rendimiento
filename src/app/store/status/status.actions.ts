import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatuses = '[Status] Load Statuses',
  LoadedStatuses = '[Status] Loaded Statuses',
  ErrHttpStatuses = '[Status] Error http'
}

export class LoadStatuses implements Action {
  readonly type = StatusActionTypes.LoadStatuses;
}

export class LoadedStatuses implements Action {
  readonly type = StatusActionTypes.LoadedStatuses;

  constructor(readonly payload: any) {}
}

export class ErrHttpStatuses implements Action {
  readonly type = StatusActionTypes.ErrHttpStatuses;

  constructor(readonly payload: any) {}
}

export type StatusActions = LoadStatuses | LoadedStatuses | ErrHttpStatuses;
