import React from 'react';
import {withTranslation} from 'react-i18next';
import '../less/index.less';
import classNames from 'classnames';
import Header from '../components/Header';
import WelcomeContainer from './WelcomeContainer';
import PhoneSliderContainer from './PhoneSliderContainer';
import BubbleContainer from './BubbleContainer';
import HowItWorksContainer from './HowItWorksContainer';
import PresentationContainer from './PresentationContainer';
import SubscriptionsContainer from './SubscriptionsContainer';

class LandingContainer extends React.Component {
	renderHeader() {
		return <Header />;
	}

	renderBlock(elem, maxWidth = false) {
		return <div className={classNames('Block', {maxWidth})}>{elem}</div>;
	}

	renderContentChildren() {
		return [
			this.renderBlock(<WelcomeContainer />),
			this.renderBlock(<PhoneSliderContainer />),
			this.renderBlock(<BubbleContainer />, true),
			this.renderBlock(<HowItWorksContainer />),
			this.renderBlock(<PresentationContainer />, true),
			this.renderBlock(<SubscriptionsContainer />),
		];
	}

	renderContent() {
		return <div className="content">{this.renderContentChildren()}</div>;
	}

	render() {
		return (
			<div className="main">
				{this.renderHeader()}
				{this.renderContent()}
			</div>
		);
	}
}

export default withTranslation()(LandingContainer);
