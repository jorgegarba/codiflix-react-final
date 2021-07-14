import {
	FINISH_LOADING_ACTION,
	FINISH_LOADING_COMEDY,
	FINISH_LOADING_DRAMA,
	FINISH_LOADING_HORROR,
	SET_ACTION,
	SET_COMEDY,
	SET_DRAMA,
	SET_HORROR,
	START_LOADING_ACTION,
	START_LOADING_COMEDY,
	START_LOADING_DRAMA,
	START_LOADING_HORROR
} from '../types';
import axios from 'axios';
import { API_KEY_TMBD, URL_TMDB } from '../../env/env';
const startLoadingAction = () => ({ type: START_LOADING_ACTION });
const finishLoadingAction = () => ({ type: FINISH_LOADING_ACTION });

const startLoadingComedy = () => ({ type: START_LOADING_COMEDY });
const finishLoadingComedy = () => ({ type: FINISH_LOADING_COMEDY });

const startLoadingDrama = () => ({ type: START_LOADING_DRAMA });
const finishLoadingDrama = () => ({ type: FINISH_LOADING_DRAMA });

const startLoadingHorror = () => ({ type: START_LOADING_HORROR });
const finishLoadingHorror = () => ({ type: FINISH_LOADING_HORROR });

export const getActionMoviesAction = () => {
	return async (dispatch) => {
		dispatch(startLoadingAction());

		const endpoint = `${URL_TMDB}/discover/movie?api_key=${API_KEY_TMBD}&with_genres=${28}&language=es-PE`;
		const {
			data: { results }
		} = await axios.get(endpoint);

		dispatch({
			type: SET_ACTION,
			payload: results
		});

		dispatch(finishLoadingAction());
	};
};

export const getActionMoviesComedy = () => {
	return async (dispatch) => {
		dispatch(startLoadingComedy());

		const endpoint = `${URL_TMDB}/discover/movie?api_key=${API_KEY_TMBD}&with_genres=${35}&language=es-PE`;
		const {
			data: { results }
		} = await axios.get(endpoint);

		dispatch({
			type: SET_COMEDY,
			payload: results
		});

		dispatch(finishLoadingComedy());
	};
};

export const getActionMoviesDrama = () => {
	return async (dispatch) => {
		dispatch(startLoadingDrama());

		const endpoint = `${URL_TMDB}/discover/movie?api_key=${API_KEY_TMBD}&with_genres=${18}&language=es-PE`;
		const {
			data: { results }
		} = await axios.get(endpoint);

		dispatch({
			type: SET_DRAMA,
			payload: results
		});

		dispatch(finishLoadingDrama());
	};
};
export const getActionMoviesHorror = () => {
	return async (dispatch) => {
		dispatch(startLoadingHorror());

		const endpoint = `${URL_TMDB}/discover/movie?api_key=${API_KEY_TMBD}&with_genres=${27}&language=es-PE`;
		const {
			data: { results }
		} = await axios.get(endpoint);

		dispatch({
			type: SET_HORROR,
			payload: results
		});

		dispatch(finishLoadingHorror());
	};
};
