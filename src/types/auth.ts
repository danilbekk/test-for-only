export interface User {
  login: string;
  password: string;
}

export interface AuthState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any[];
  loading: boolean;
  error: null | string;
  authorized: boolean;
}

export enum AuthActionTypes {
  AUTH_PENDING = 'AUTH_PENDING',
  AUTH_SUCCESS = 'AUTH__SUCCESS',
  AUTH__ERROR = 'AUTH__ERROR',
  LOG_OUT = 'LOG_OUT',
}
interface AuthPendingAction {
  type: AuthActionTypes.AUTH_PENDING;
}
interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: User;
}
interface AuthErrorAction {
  type: AuthActionTypes.AUTH__ERROR;
  payload: string;
}
interface LogOutAction {
  type: AuthActionTypes.LOG_OUT;
}
export type AuthAction =
  | AuthPendingAction
  | AuthErrorAction
  | AuthSuccessAction
  | LogOutAction;
