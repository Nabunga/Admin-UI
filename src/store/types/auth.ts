export interface AuthState {
  username: string;
  password: string;
  accessToken: any;
  loginError: string;
}

export enum AuthActionTypes {
  AUTH_SET_USERNAME_VALUE = "AUTH_SET_USERNAME_VALUE",
  AUTH_SET_PASSWORD_VALUE = "AUTH_SET_PASSWORD_VALUE",
  AUTH_SET_ACCESS_TOKEN = "AUTH_SET_ACCESS_TOKEN",
  AUTH_CATCH_REQUEST_ERROR = "AUTH_CATCH_REQUEST_ERROR",
}

interface AuthSetUsernameValueAction {
  type: AuthActionTypes.AUTH_SET_USERNAME_VALUE;
  payload: string;
}

interface AuthSetPasswordValueAction {
  type: AuthActionTypes.AUTH_SET_PASSWORD_VALUE;
  payload: string;
}

interface AuthSetAccessTokenAction {
  type: AuthActionTypes.AUTH_SET_ACCESS_TOKEN;
  payload: string;
}

interface AuthCatchRequestErrorAction {
  type: AuthActionTypes.AUTH_CATCH_REQUEST_ERROR;
  payload: string;
}

export type AuthAction = AuthSetUsernameValueAction | AuthSetPasswordValueAction | AuthSetAccessTokenAction | AuthCatchRequestErrorAction