import React from 'react';
import {withTranslation} from 'react-i18next';
import '../less/index.less';
import classNames from 'classnames';
import Header from '../components/Header';
import WelcomeBlock from '../components/WelcomeBlock';
import PhoneSliderBlock from '../components/PhoneSliderBlock';
import BubbleBlock from '../components/BubbleBlock';
import HowItWorksBlock from '../components/HowItWorksBlock';

function LandingContainer() {
	function renderHeader() {
		return <Header />;
	}

	function renderBlock(elem, maxWidth = false) {
		return <div className={classNames('Block', {maxWidth})}>{elem}</div>;
	}

	function renderContentChildren() {
		return [renderBlock(<WelcomeBlock />), renderBlock(<PhoneSliderBlock />), renderBlock(<BubbleBlock />, true), renderBlock(<HowItWorksBlock />)];
	}

	function renderContent() {
		return <div className="content">{renderContentChildren()}</div>;
	}

	return (
		<div className="main">
			{renderHeader()}
			{renderContent()}
		</div>
	);
}

export default withTranslation()(LandingContainer);
