import { initialResultState, IResultState, LoadingState } from '../state/result.state';
import { ResultActions, EResultActions } from '../actions/result.actions';

export const resultReducers = (
  state = initialResultState,
  action: ResultActions
): IResultState => {
  switch (action.type) {
    case EResultActions.ResultSuccess:
      return {
        ...state,
        callState: LoadingState.LOADED
      };
    case EResultActions.ResultFailed:
      return {
        ...state,
        callState: { errorMsg: 'Fetch failed' }
      };
    default:
      return state;
  }
};
