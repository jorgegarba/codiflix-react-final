import React from 'react';

const MainHero = () => {
	return (
		<section className="hero">
			<div className="hero__info">
				<h2 className="hero__title">The Hackers</h2>
				<div className="hero__classification">
					<p className="hero__redbox">
						TOP <br /> 10
					</p>
					<p className="hero__subtitle"> N° 7 en películas hoy</p>
				</div>
				<p className="hero__overview">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum et
					optio soluta nihil corrupti earum alias? Laudantium obcaecati amet,
					qui quidem voluptatem nobis blanditiis dolores natus animi illo
					doloremque iure.
				</p>
				<div className="hero__buttons">
					<button className="play">
						<i className="fas fa-play"></i> Reproducir
					</button>
					<button className="info">
						<i className="fas fa-info-circle"></i>Más Información
					</button>
				</div>
			</div>
		</section>
	);
};

export default MainHero;
