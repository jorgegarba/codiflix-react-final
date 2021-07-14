import React from 'react';
import MainCategory from '../molecules/MainCategory';
import MainHeader from '../molecules/MainHeader';
import MainHero from '../molecules/MainHero';

import { Button, Modal } from 'react-bootstrap';

const MainPrincipal = () => {
	return (
		<div className="dashboard">
			<MainHeader />
			<MainHero />
			<div
				style={{
					transform: 'translate(0,-140px)'
				}}
			>
				<MainCategory name="action" />
				<MainCategory name="comedy" />
				<MainCategory name="drama" />
				<MainCategory name="horror" />
			</div>

			
		</div>
	);
};

export default MainPrincipal;
