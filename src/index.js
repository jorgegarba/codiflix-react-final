import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import './assets/sass/login.scss';
import './assets/sass/dashboard.scss';
import './assets/sass/modal.scss';
import './assets/sass/flickity.scss';
import './assets/sass/bootstrap.scss';
import './assets/sass/splash.sass';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
