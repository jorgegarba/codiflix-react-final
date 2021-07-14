import React from 'react';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter,
	HashRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import AuthRouter from './modules/auth/AuthRouter';
import MainRouter from './modules/main/MainRouter';
import PrivateRoute from './PrivateRoute';
import { startSessionWithLocalStorage } from './redux/actions/authAction';

const App = () => {
	const dispatch = useDispatch();
	dispatch(startSessionWithLocalStorage());
	return (
		<HashRouter>
			<Switch>
				<Route path="/auth" component={AuthRouter} />
				<PrivateRoute path="/main" component={MainRouter} />
				<Redirect to="/main" />
			</Switch>
		</HashRouter>
	);
};

export default App;
