import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeSessionAction } from '../../../redux/actions/authAction';
import logo from './../../../assets/images/logo.png';
const MainHeader = () => {
	const { usuNom } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<header className="header">
			<div className="header__logo">
				<figure>
					<img src={logo} alt="logo" />
				</figure>
			</div>
			<nav className="header__mobile">
				<a href="#">
					Explorar <i className="fas fa-chevron-down"></i>
				</a>
			</nav>
			<nav className="header__nav">
				<ul className="header__links">
					<li className="header__item active">
						<NavLink
							exact
							to="/main/principal"
							className="header__link"
							activeClassName="active"
						>
							Inicio
						</NavLink>
					</li>
					<li className="header__item">
						<a href="#" className="header__link">
							Series
						</a>
					</li>
					<li className="header__item">
						<a href="#" className="header__link">
							Peliculas
						</a>
					</li>
					<li className="header__item">
						<a href="#" className="header__link">
							Novedades populares
						</a>
					</li>
					<li className="header__item">
						<a href="#" className="header__link">
							Mi lista
						</a>
					</li>
				</ul>
			</nav>
			<div className="header__buttons">
				<div className="header__searchbar">
					<button>
						<input type="text" />
						<i className="fas fa-search fa-2x"></i>
					</button>
				</div>
				<div className="header__notificon">
					<i className="fas fa-bell fa-2x"></i>
				</div>
				<div className="header__user">
					<Dropdown>
						<Dropdown.Toggle
							variant="danger"
							style={{
								backgroundColor: '#e50914'
							}}
							id="dropdown-basic"
						>
							{usuNom}
						</Dropdown.Toggle>

						<Dropdown.Menu color="dark">
							<Dropdown.Item
								as={'button'}
								onClick={() => {
									dispatch(closeSessionAction());
								}}
							>
								Cerrar Sesión
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
