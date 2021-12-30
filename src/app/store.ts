import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../features/Login/authReducer';

export const store = createStore(authReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof authReducer>;
