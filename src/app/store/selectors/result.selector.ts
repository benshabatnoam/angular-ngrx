import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IResultState, getError } from '../state/result.state';

const resultState = (state: IAppState) => state.result;

export const selectGetError = createSelector(
  resultState,
  (state: IResultState) => getError(state.callState)
);
