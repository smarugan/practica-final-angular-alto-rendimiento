import { StatusActionTypes, StatusActions } from './status.actions';


export interface State {
  statuses: any[];
  loaded: boolean;
  loading: boolean;
  error?: string;
}

export const initialState: State = {
  statuses: [],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: StatusActions): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      return { ...state, loading: true };
    case StatusActionTypes.LoadedStatuses:
      return { statuses: action.payload, loaded: true, loading: false };
    case StatusActionTypes.ErrHttpStatuses:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
