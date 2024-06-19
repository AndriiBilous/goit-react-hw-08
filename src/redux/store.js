import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './contacts/contactsSlice';
import filterReducer from './filters/filtersSlice';
import authSlice from './auth/slice';
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
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const persistedAuthConfig = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistedAuthConfig,
        contacts: itemReducer,
        filters: filterReducer,
    },
    middleware: getDefaultMiddleware =>
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
        }),
});
export const persistor = persistStore(store);
