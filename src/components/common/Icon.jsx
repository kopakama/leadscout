import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Icon({...props}) {
	function getBaseClassName() {
		return 'Icon';
	}

	return (
		<div className={classNames(getBaseClassName(), props.icon)}>
			<div className={classNames(`${getBaseClassName()}__content`)} />
		</div>
	);
}

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default Icon;
