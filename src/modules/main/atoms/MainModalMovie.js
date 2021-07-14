import React from 'react';
import { Modal } from 'react-bootstrap';
import { URL_IMG_TMDB } from '../../../env/env';
import logo from './../../../assets/images/logo.png';
const MainModalMovie = ({ show, setShow, objMovie }) => {
	const handleClose = () => setShow(false);

	let background = objMovie.backdrop_path
		? `linear-gradient(to bottom, transparent 60%, black),
  url("${URL_IMG_TMDB}${objMovie.backdrop_path}")`
		: `url(${logo})`;

	return (
		<Modal show={show} onHide={handleClose} size="xl" centered scrollable>
			<Modal.Body className="p-0">
				<div class="modal-codiflix">
					<div class="modal__banner" style={{ backgroundImage: background }}>
						<div class="modal__info">
							<h1 class="modal__title">{objMovie.title}</h1>
							<div class="modal__buttons">
								<button class="play">
									<i class="fas fa-play"></i> Reproducir
								</button>
								<button class="action">
									<i class="fas fa-plus"></i>
								</button>
								<button class="action">
									<i class="fas fa-thumbs-up"></i>
								</button>
								<button class="action">
									<i class="fas fa-thumbs-down"></i>
								</button>
							</div>
							<div class="modal__row">
								<div class="modal__text">
									<div class="modal__statistics">
										<span class="percent"> 98 % para ti </span>
										<span class="age"> 13+ </span>
										<span class="time"> 1 h 50 min </span>
										<span class="quality"> HD </span>
									</div>
									<p class="modal__overview">{objMovie.overview}</p>
								</div>
								<div class="modal__fields">
									<div class="modal__cast">
										<span class="field">Elenco:</span>
										<span class="value">Jorge Garnica, Jhon Travolta</span>
									</div>
									<div class="modal__cast">
										<span class="field">Géneros:</span>
										<span class="value">Suspenso, Drama, Acción</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default MainModalMovie;
