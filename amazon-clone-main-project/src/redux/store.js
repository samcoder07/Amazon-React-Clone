import { configureStore } from '@reduxjs/toolkit'
import amazonReducer from '../redux/amazonSlice'
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
export const store = configureStore({
  reducer: {amazonReducer},
})