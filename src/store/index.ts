import { configureStore, Middleware } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import testReducer from '../features/testSlice';
import basicCompReducer from '../features/basicCompSlice';
import formReducer from '../features/formSlice';

const middlewares: Middleware[] = [];

export const store = configureStore({
  reducer: {
    app: appReducer,
    test: testReducer,
    basicComp: basicCompReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
