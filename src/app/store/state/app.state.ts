import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { initialConfigState, IConfigState } from './config.state';
import { IResultState, initialResultState } from './result.state';


export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
  result: IResultState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  result: initialResultState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
