import { LaunchActionTypes, LaunchActions } from './launch.actions';

export interface State {
  launches: any[];
  loaded: boolean;
  loading: boolean;
  error?: string;
}

export const initialState: State = {
  launches: [],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: LaunchActions): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchActionTypes.LoadedLaunches:
      return { launches: action.payload, loaded: true, loading: false };
    case LaunchActionTypes.ErrHttpLaunches:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
