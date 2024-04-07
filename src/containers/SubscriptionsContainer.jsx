import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import classNames from 'classnames';
import BaseContainer from '../components/common/BaseContainer';
import SubscriptionCard from '../components/SubscriptionCard';

class SubscriptionsContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'SubscriptionsContainer',
	};

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			subscriptions: [],
			testSubscriptions: [],
			currentSwitch: 'switch-radio2',
		};

		this.onChangeMonth = this.onChangeMonth.bind(this);
	}

	componentDidMount() {
		fetch('/dev/v1/subscriptions')
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						subscriptions: result.subscriptions.filter((subscription) => !!subscription?.price),
						testSubscriptions: result.subscriptions.filter((subscription) => !subscription?.price),
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				},
			);
	}

	onChangeMonth(e) {
		this.setState({currentSwitch: e.target.id});
	}

	getCardCost(subscription) {
		const {currentSwitch} = this.state;
		const {price, price_3m, price_6m} = subscription;
		if (!price) {
			return 'Бесплатно';
		}
		if (currentSwitch === 'switch-radio1') {
			return price;
		}
		if (currentSwitch === 'switch-radio2') {
			return price_3m / 3;
		}

		return price_6m / 6;
	}

	getCards(subscriptions) {
		return subscriptions.map((subscription) => (
			<SubscriptionCard
				title={subscription.title}
				desc={subscription.support_type}
				cost={this.getCardCost(subscription)}
				defaultCost={subscription.price}
				costDesc={subscription.price ? 'В месяц' : 'на 7 дней'}
				bonuses={[`${subscription.quantity_exclusion_words} слов-исключений`, `${subscription.quantity_groups} групп`, `${subscription.quantity_keywords} ключевых слов`]}
			/>
		));
	}

	renderTestCards() {
		const {testSubscriptions} = this.state;
		return <div className={classNames(`${this.getBaseClassName()}__cards`, `${this.getBaseClassName()}__test_cards`)}>{this.getCards(testSubscriptions)}</div>;
	}

	renderCards() {
		const {subscriptions} = this.state;
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCards(subscriptions)}</div>;
	}

	renderSwitchInput(id) {
		const {currentSwitch} = this.state;
		return <input type="radio" className="switch-radio" id={id} name="radio" checked={currentSwitch === id} />;
	}

	renderSwitch() {
		return (
			<div className="switch-container">
				<form className="switch" onChange={this.onChangeMonth}>
					{this.renderSwitchInput('switch-radio1')}
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor="switch-radio1">Месяц</label>

					{this.renderSwitchInput('switch-radio2')}
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor="switch-radio2">3 месяца</label>

					{this.renderSwitchInput('switch-radio3')}
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor="switch-radio3">Полгода</label>
					<span id="active-label" />
				</form>
			</div>
		);
	}

	renderTitle() {
		const {t} = this.props;
		return <div className={`${this.getBaseClassName()}__title`}>{t('getSubscription')}</div>;
	}

	renderContentChildren() {
		return [this.renderTitle(), this.renderTestCards(), this.renderSwitch(), this.renderCards()];
	}

	render() {
		const {error, isLoaded} = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		}
		if (!isLoaded) {
			return <div>Loading...</div>;
		}
		return super.render();
	}
}

export default withTranslation()(SubscriptionsContainer);
