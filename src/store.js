import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userApi';
import { accountApi } from './services/accountApi';
import { serviceApi } from './services/serviceApi';
import { favoriteApi } from './services/favoriteApi';
import userReducer from './feature/userSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(userApi.middleware, accountApi.middleware, serviceApi.middleware, favoriteApi.middleware),
});

export const persistor = persistStore(store);
