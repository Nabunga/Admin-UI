import { AuthAction, AuthActionTypes, AuthState } from '../types/auth';

const initialState: AuthState = {
  username: "",
  password: "",
  accessToken: null,
  loginError: "",
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SET_USERNAME_VALUE:
      return { ...state, username: action.payload }
    case AuthActionTypes.AUTH_SET_PASSWORD_VALUE:
      return { ...state, password: action.payload }
    case AuthActionTypes.AUTH_SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload }
    case AuthActionTypes.AUTH_CATCH_REQUEST_ERROR:
      return { ...state, loginError: action.payload}
    default:
      return state
  }
}