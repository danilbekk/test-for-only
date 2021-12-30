import { Dispatch } from 'redux';
import { AuthAction, AuthActionTypes, AuthState, User } from '../../types/auth';

const initialState: AuthState = {
  user: [],
  authorized: false,
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: [action.payload],
        authorized: true,
        loading: false,
      };

    case AuthActionTypes.AUTH__ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        authorized: false,
      };
    default:
      return state;
  }
};

export const authorization = (data: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.AUTH_PENDING });

      setTimeout(() => {
        const fetchUser: User = {
          login: 'steve.jobs@example.com',
          password: 'steve15',
        };

        if (fetchUser.login !== data.login) {
          dispatch({
            type: AuthActionTypes.AUTH__ERROR,
            payload: `Пользователя ${data.login} не существует`,
          });
        } else if (fetchUser.password !== data.password) {
          dispatch({
            type: AuthActionTypes.AUTH__ERROR,
            payload: 'Неверный пароль',
          });
        } else {
          localStorage.setItem('token', 'true');
          dispatch({ type: AuthActionTypes.AUTH_SUCCESS, payload: fetchUser });
        }
      }, 500);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH__ERROR,
        payload: 'Произошла ошибка при авторизации',
      });
    }
  };
};

export const logOut = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.LOG_OUT });
  };
};
