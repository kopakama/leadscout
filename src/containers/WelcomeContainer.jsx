import React from 'react';
import {withTranslation} from 'react-i18next';
import '../less/components/Header.less';
import WelcomeImage from '../img/welcome.gif';
import Button from '../components/common/Button';
import BaseContainer from '../components/common/BaseContainer';
import {scrollTo} from '../helpers/helper';

class WelcomeContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'WelcomeContainer',
	};

	renderLeftItems() {
		const className = `${this.getBaseClassName()}__left_items`;
		const {t} = this.props;
		return (
			<div className={className}>
				<div className={`${className}__title`}>
					<h1>{t('welcomeLeftBlockTitle')}</h1>
				</div>
				<div className={`${className}__descr`}>{t('welcomeLeftBlockDescr')}</div>
				<div className={`${className}__buttons`}>
					<Button className={`${className}__button`} text={t('plan')} icon="download" onClick={(e) => scrollTo(e, 'SubscriptionsContainer')} />
					<Button className={`${className}__button`} text={t('howItWorks')} variant="outlined" icon="play" onClick={(e) => scrollTo(e, 'HowItWorksContainer')} />
				</div>
			</div>
		);
	}

	renderRightItems() {
		const className = `${this.getBaseClassName()}__right_items`;
		return (
			<div className={className}>
				<img className={`${this.getBaseClassName()}__right_items__image`} src={WelcomeImage} alt="" />
			</div>
		);
	}

	renderContentChildren() {
		return [this.renderLeftItems(), this.renderRightItems()];
	}
}

export default withTranslation()(WelcomeContainer);
