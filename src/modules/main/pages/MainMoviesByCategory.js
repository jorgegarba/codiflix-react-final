import React from 'react';
import { useSelector } from 'react-redux';
import { categoryDictionary } from '../../../utils/utils';
import MainMovieCard from '../atoms/MainMovieCard';
import MainHeader from '../molecules/MainHeader';

const MainMoviesByCategory = ({
	match: {
		params: { category }
	}
}) => {
	const { loading, data: movies } = useSelector(
		(state) => state.movies[category]
	);
	console.log(movies);
	return (
		<>
			<div className="dashboard" style={{ paddingTop: '100px' }}>
				<MainHeader />
				<h1 className="dashboard__title-category">
					Resultados para {categoryDictionary[category]}
				</h1>
				<div className="dashboard__container">
					{movies.map((objMovie) => {
						return (
							<MainMovieCard objMovie={objMovie} className="on-category" />
						);
					})}
				</div>

				{/* <MainCategory name="action" caption="Acción" />
				<MainCategory name="comedy" caption="Comedia" />
				<MainCategory name="drama" caption="Drama" />
				<MainCategory name="horror" caption="Horror" /> */}
			</div>
		</>
	);
};

export default MainMoviesByCategory;
