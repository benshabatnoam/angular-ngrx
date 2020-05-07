import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';
import { resultReducers } from './result.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers,
  result: resultReducers
};
