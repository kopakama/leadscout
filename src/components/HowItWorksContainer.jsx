import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import Icon from './common/Icon';
import BaseContainer from './common/BaseContainer';

class HowItWorksContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'HowItWorksContainer',
	};

	renderCard(icon, title, desc) {
		return (
			<div className={`${this.getBaseClassName()}__card`}>
				<Icon icon="icon" />
				<div className="title">{title}</div>
				<div className="desc">{desc}</div>
			</div>
		);
	}

	getCards() {
		const {t} = this.props;

		return [
			this.renderCard('icon', t('addChats'), t('addChatsDesc')),
			this.renderCard('icon', t('addKeywords'), t('addKeywordsDesc')),
			this.renderCard('icon', t('getHotLeads'), t('getHotLeadsDesc')),
		];
	}

	renderCards() {
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCards()}</div>;
	}

	renderTitle() {
		const {t} = this.props;
		return <div className={`${this.getBaseClassName()}__title`}>{t('howItWorks')}</div>;
	}

	renderContentChildren() {
		return [this.renderTitle(), this.renderCards()];
	}
}

export default withTranslation()(HowItWorksContainer);
