import React from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import Button from './common/Button';

function SubscriptionCard({...props}) {
	const {title, desc, cost, costDesc, bonuses, t} = props;
	function getBaseClassName() {
		return 'SubscriptionCard';
	}

	return (
		<div className="SubscriptionCard">
			<div className={`${getBaseClassName()}__top_block`}>
				<div className={`${getBaseClassName()}__title`}>{title}</div>
				<div className={`${getBaseClassName()}__desc`}>{desc}</div>
				<div className={`${getBaseClassName()}__cost`}>
					<div className={`${getBaseClassName()}__cost_price`}>{cost}</div>
					<div className={`${getBaseClassName()}__cost_desc`}>{costDesc}</div>
				</div>
			</div>
			<div className={`${getBaseClassName()}__bottom_block`}>
				<div className={`${getBaseClassName()}__bonuses`}>
					{bonuses.map((bonus) => (
						<div className={`${getBaseClassName()}__bonus`}>{bonus}</div>
					))}
				</div>
				<Button text={t('getSubscriptionButton')} />
			</div>
		</div>
	);
}

SubscriptionCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	cost: PropTypes.string.isRequired,
	costDesc: PropTypes.string.isRequired,
	bonuses: PropTypes.array.isRequired,
	t: PropTypes.func.isRequired,
};

export default withTranslation()(SubscriptionCard);
