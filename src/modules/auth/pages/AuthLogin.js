import React from 'react';
import logo from './../../../assets/images/logo.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginAction } from '../../../redux/actions/authAction';
const AuthLogin = ({ history }) => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const { autenticado, cargando } = useSelector((state) => state.auth);

	if (autenticado) {
		history.push('/main/splash');
	}

	const dispatch = useDispatch();
	const onHandleSubmit = ({ correo, password }) => {
		dispatch(postLoginAction(correo, password));
	};

	return (
		<div className="login">
			<div className="wrapper">
				<div className="header">
					<figure>
						<img src={logo} alt="" />
					</figure>
				</div>
				<form className="form-login" onSubmit={handleSubmit(onHandleSubmit)}>
					<h1 className="form-login__title">Iniciar sesión</h1>
					<div className="form-login__group">
						<input
							classNameName={errors?.correo ? 'error' : ''}
							type="text"
							placeholder="email"
							{...register('correo', {
								required: {
									value: true,
									message: 'El campo email es requerido'
								},
								pattern: {
									value: /^\S+@\S+$/,
									message: 'El formato del email no es correcto'
								}
							})}
						/>
						{errors?.correo ? <small>{errors.correo.message}</small> : null}
					</div>
					<div className="form-login__group">
						<input
							classNameName={errors?.password ? 'error' : ''}
							type="password"
							{...register('password', {
								required: {
									value: true,
									message: 'El campo password es requerido'
								},
								minLength: {
									value: 6,
									message: 'La mínima cantidad de caracteres es: 6'
								}
							})}
							placeholder="contraseña"
							name="password"
						/>
						{errors?.password ? <small>{errors.password.message}</small> : null}
					</div>
					<div className="form-login__group">
						<button className="form-login__submit">Iniciar sesión</button>
					</div>
					<hr />
					<p className="form-login__register">
						¿No estás registrado?
						<a href="#">Regístrate!</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default AuthLogin;
