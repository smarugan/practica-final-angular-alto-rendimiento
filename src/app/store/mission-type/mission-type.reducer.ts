import { MissionTypeActions, MissionTypeActionTypes } from './mission-type.actions';

export interface State {
  missionTypes: any[];
  loaded: boolean;
  loading: boolean;
  error?: string;
}

export const initialState: State = {
  missionTypes: [],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: MissionTypeActions): State {
  switch (action.type) {
    case MissionTypeActionTypes.LoadMissionTypes:
      return { ...state, loading: true };
    case MissionTypeActionTypes.LoadedMissionTypes:
      return { missionTypes: action.payload, loaded: true, loading: false };
    case MissionTypeActionTypes.ErrHttpMissionType:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
