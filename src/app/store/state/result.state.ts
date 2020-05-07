export interface IResultState {
  result: any;
  callState: CallState;
}

export const initialResultState: IResultState = {
  result: null,
  callState: null
};

export const enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface IErrorState {
  errorMsg: string;
}

export type CallState = LoadingState | IErrorState;

// Helper function to extract error, if there is one.
export function getError(callState: CallState): string | null {
  if (callState && (callState as IErrorState).errorMsg !== undefined) {
    return (callState as IErrorState).errorMsg;
  }
  return null;
}
