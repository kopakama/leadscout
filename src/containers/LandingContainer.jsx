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
import FaqContainer from './FaqContainer';
import ContactBubbleContainer from './ContactBubbleContainer';
import FooterContainer from './FooterContainer';

class LandingContainer extends React.Component {
	renderHeader() {
		return <Header />;
	}

	renderBlock(elem, maxWidth = false) {
		return (
			<div className={classNames('Block', {maxWidth})}>
				<div className="Block__content">{elem}</div>
			</div>
		);
	}

	renderContentChildren() {
		return [
			this.renderBlock(<WelcomeContainer />),
			this.renderBlock(<PhoneSliderContainer />),
			this.renderBlock(<BubbleContainer />, true),
			this.renderBlock(<HowItWorksContainer />),
			this.renderBlock(<PresentationContainer />, true),
			this.renderBlock(<SubscriptionsContainer />),
			this.renderBlock(<FaqContainer />),
			this.renderBlock(<ContactBubbleContainer />, true),
			this.renderBlock(<FooterContainer />),
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
