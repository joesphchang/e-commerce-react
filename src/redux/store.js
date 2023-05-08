import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
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
const stripe = require('stripe')(
	'sk_test_51CqpCID1jmLspDdgUGo3TUNpyMriVDzFGITivDSXeZ0d8LVYeJyS3k9FZH3n913aRpo0uuKyiyYxNG6hFRH53DjN00AXUGUMUq'
);

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
	reducer: {
		cart: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let presistor = persistStore(store);
