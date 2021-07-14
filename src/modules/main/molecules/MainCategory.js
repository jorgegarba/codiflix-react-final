import React from 'react';
import MainMovieCard from '../atoms/MainMovieCard';
import Flickity from 'react-flickity-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryDictionary } from '../../../utils/utils';
import LoadingBox from './LoadingBox';
const flickityOptions = {
	initialIndex: 2
};
const MainCategory = ({ name }) => {
	const { loading, data: movies } = useSelector((state) => state.movies[name]);
	console.log(loading);
	return (
		<section className="category">
			<h3 className="category__title">
				Películas de{' '}
				<Link to={`/main/category/${name}`}>
					<span>{categoryDictionary[name]}</span>
				</Link>
			</h3>
			{loading ? (
				<LoadingBox />
			) : (
				<Flickity
					elementType={'div'} // default 'div'
					options={{
						initialIndex: 2,
						pageDots: false
					}} // takes flickity options {}
					disableImagesLoaded={false} // default false
					reloadOnUpdate // default false
					static // default false
				>
					{movies.map((objMovie) => (
						<MainMovieCard objMovie={objMovie} key={objMovie.id} />
					))}
				</Flickity>
			)}
		</section>
	);
};

export default MainCategory;
