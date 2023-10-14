import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import BaseContainer from '../components/common/BaseContainer';
import Card from '../components/Card';

class HowItWorksContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'HowItWorksContainer',
	};

	getCards() {
		const {t} = this.props;

		return [
			<Card icon="icon" title={t('addChats')} desc={t('addChatsDesc')} />,
			<Card icon="icon" title={t('addKeywords')} desc={t('addKeywordsDesc')} />,
			<Card icon="icon" title={t('getHotLeads')} desc={t('getHotLeadsDesc')} />,
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
