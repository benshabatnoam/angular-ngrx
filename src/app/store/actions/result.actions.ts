import { Action } from '@ngrx/store';

export enum EResultActions {
  ResultSuccess = '[Result] Result Success',
  ResultFailed = '[Result] Result Failed'
}

export class ResultSuccess implements Action {
  public readonly type = EResultActions.ResultSuccess;
}

export class ResultFailed implements Action {
  public readonly type = EResultActions.ResultFailed;
}

export type ResultActions = ResultSuccess | ResultFailed;
