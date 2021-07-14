import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../env/env';
import {
	CLOSE_SESSION,
	FINISH_LOADING_LOGIN,
	SET_SUCCESS_LOGIN,
	START_LOADING_LOGIN
} from '../types';

const startLoadingLogin = () => ({ type: START_LOADING_LOGIN });
const finishLoadingLogin = () => ({ type: FINISH_LOADING_LOGIN });

export const postLoginAction = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingLogin());

			const endpoint = `${URL_BACKEND}/login`;
			const response = await axios.post(
				endpoint,
				JSON.stringify({ correo: email, password: password }),
				{ headers: { 'Content-type': 'application/json' } }
			);
			if (response.status === 200) {
				const { token } = response.data;
				const payloadToken = token.split('.')[1];
				const payloadTokenDecoed = atob(payloadToken);
				const payloadJSON = JSON.parse(payloadTokenDecoed);
				localStorage.setItem('token', token);
				dispatch({
					type: SET_SUCCESS_LOGIN,
					payload: {
						usuId: payloadJSON.usu_id,
						usuNom: payloadJSON.usu_nom,
						usuTipo: payloadJSON.usu_tipo,
						token: token,
						autenticado: true
					}
				});

				dispatch({ type: FINISH_LOADING_LOGIN });
			}

			dispatch(finishLoadingLogin());
		} catch (error) {
			dispatch(finishLoadingLogin());
			Swal.fire({
				icon: 'error',
				title: 'Ups!',
				text: 'Usuario y/o contraseña incorrectos',
				timer: 2000
			});
		}
	};
};

export const startSessionWithLocalStorage = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingLogin());

			const token = localStorage.getItem('token');
			if (token) {
				const endpoint = `${URL_BACKEND}/verificar`;
				const response = await axios.post(endpoint, null, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				if (response.data.ok) {
					const payloadToken = token.split('.')[1];
					const payloadTokenDecoed = atob(payloadToken);
					const payloadJSON = JSON.parse(payloadTokenDecoed);
					dispatch({
						type: SET_SUCCESS_LOGIN,
						payload: {
							usuId: payloadJSON.usu_id,
							usuNom: payloadJSON.usu_nom,
							usuTipo: payloadJSON.usu_tipo,
							token: token,
							autenticado: true
						}
					});
					dispatch(finishLoadingLogin());
				} else {
					dispatch(finishLoadingLogin());
				}
			} else {
				dispatch(finishLoadingLogin());
			}
		} catch (error) {
			dispatch(finishLoadingLogin());
		}
	};
};

export const closeSessionAction = () => {
	return { type: CLOSE_SESSION };
};
