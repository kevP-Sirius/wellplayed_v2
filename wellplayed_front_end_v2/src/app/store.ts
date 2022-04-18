import { configureStore, ThunkAction, Action,compose, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from '../store/reducer';
import Middleware from '../store/Middleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;
const enhancers = composeEnhancers(
  applyMiddleware(
    Middleware
  ),
);
export const store = configureStore({
  reducer: reducers,
  middleware: [Middleware] as const
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
