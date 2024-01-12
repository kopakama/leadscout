import './App.css';
import React, {useEffect} from 'react';
// eslint-disable-next-line import/no-unresolved
import {register} from 'swiper/element/bundle';
import classNames from 'classnames';
import {isMobile} from 'react-device-detect';
import LandingContainer from './containers/LandingContainer';
// import function to register Swiper custom elements
// register Swiper custom elements
register();

function App() {
	useEffect(() => {
		document.title = 'Поиск лидов';
	}, []);

	return (
		<div className={classNames('app', isMobile ? 'phone' : 'desktop')}>
			<LandingContainer />
		</div>
	);
}

export default App;
