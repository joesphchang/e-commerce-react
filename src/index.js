import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { presistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={"loading"} persistor={presistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
