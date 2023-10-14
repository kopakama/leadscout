import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import BaseContainer from '../components/common/BaseContainer';
import SubscriptionCard from '../components/SubscriptionCard';

class SubscriptionsContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'SubscriptionsContainer',
	};

	getCards() {
		// const {t} = this.props;

		return [
			<SubscriptionCard title="Title" desc="Description" cost="228₽" costDesc="Per User" bonuses={['Bonus1', 'Bonus2', 'Bonus3', 'Bonus4', 'Bonus5']} />,
			<SubscriptionCard title="Title" desc="Description" cost="228₽" costDesc="Per User" bonuses={['Bonus1', 'Bonus2', 'Bonus3', 'Bonus4', 'Bonus5']} />,
			<SubscriptionCard title="Title" desc="Description" cost="228₽" costDesc="Per User" bonuses={['Bonus1', 'Bonus2', 'Bonus3', 'Bonus4', 'Bonus5']} />,
		];
	}

	renderCards() {
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCards()}</div>;
	}

	renderTitle() {
		const {t} = this.props;
		return <div className={`${this.getBaseClassName()}__title`}>{t('getSubscription')}</div>;
	}

	renderContentChildren() {
		return [this.renderTitle(), this.renderCards()];
	}
}

export default withTranslation()(SubscriptionsContainer);
