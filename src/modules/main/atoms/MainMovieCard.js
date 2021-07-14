import React from 'react';
import { useState } from 'react';
import { URL_IMG_TMDB } from '../../../env/env';
import logo from './../../../assets/images/logo.png';
import MainModalMovie from './MainModalMovie';

const MainMovieCard = ({ objMovie, className = '' }) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={`moviecard ${className}`}>
				<MainModalMovie show={show} setShow={setShow} objMovie={objMovie} />
				<figure className="moviecard__figure">
					{objMovie.backdrop_path ? (
						<img
							src={`${URL_IMG_TMDB}${objMovie.backdrop_path}`}
							alt="movie photo"
						/>
					) : (
						<img src={logo} alt="movie photo" />
					)}
					<h4 className="moviecard__title">PATERNIDAD</h4>
				</figure>
				<div className="moviecard__info">
					<div className="moviecard__actions">
						<button>
							<i className="fas fa-play"></i>
						</button>
						<button>
							<i className="fas fa-plus"></i>
						</button>
						<button>
							<i className="fas fa-thumbs-up"></i>
						</button>
						<button>
							<i className="fas fa-thumbs-down"></i>
						</button>
						<button
							onClick={() => {
								setShow(true);
							}}
						>
							<i className="fas fa-chevron-down"></i>
						</button>
					</div>
					<div className="moviecard__statistics">
						<span className="percent">98 % para ti</span>
						<span className="age">13+</span>
						<span className="time">1 h 50 min</span>
						<span className="quality">HD</span>
					</div>
					<div className="moviecard__categories">
						<span className="moviecard-category">Emotivo</span>
						<span className="moviecard-category">Optimista</span>
						<span className="moviecard-category">Drama</span>
						<span className="moviecard-category">Drama</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainMovieCard;
