import React from 'react';
import PropTypes from 'prop-types';
import Icon from './common/Icon';

function Card({...props}) {
	const {icon, title, desc} = props;

	function getBaseClassName() {
		return 'Card';
	}

	return (
		<div className={getBaseClassName()}>
			<Icon icon={icon} />
			<div className={`${getBaseClassName()}__title`}>{title}</div>
			<div className={`${getBaseClassName()}__desc`}>{desc}</div>
		</div>
	);
}

Card.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};

export default Card;
