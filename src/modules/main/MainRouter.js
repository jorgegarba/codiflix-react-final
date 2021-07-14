import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPrincipal from './pages/MainPrincipal';
import { useDispatch } from 'react-redux';
import {
	getActionMoviesAction,
	getActionMoviesComedy,
	getActionMoviesDrama,
	getActionMoviesHorror
} from '../../redux/actions/moviesActions';
import MainMoviesByCategory from './pages/MainMoviesByCategory';
import MainSplash from './pages/MainSplash';

const MainRouter = () => {
	const dispatch = useDispatch();
	dispatch(getActionMoviesAction());
	dispatch(getActionMoviesComedy());
	dispatch(getActionMoviesDrama());
	dispatch(getActionMoviesHorror());

	return (
		<Switch>
			<Route path="/main/splash" component={MainSplash} />
			<Route path="/main/principal" component={MainPrincipal} />
			<Route path="/main/category/:category" component={MainMoviesByCategory} />
			<Redirect to="/main/principal" />
		</Switch>
	);
};

export default MainRouter;
