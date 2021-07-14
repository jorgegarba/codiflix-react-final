import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthLogin from './pages/AuthLogin';

const AuthRouter = () => {
	return (
		<Switch>
			<Route path="/auth/login" component={AuthLogin} />
			<Redirect to="/auth/login" />
		</Switch>
	);
};

export default AuthRouter;
