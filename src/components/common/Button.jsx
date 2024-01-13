import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';

export function Button({...props}) {
	function getBaseClassName() {
		return 'Button';
	}

	function allowIcon() {
		return props.icon;
	}
	function renderIcon() {
		return <Icon icon={props.icon} />;
	}

	function renderText() {
		return <div className={`${getBaseClassName()}__text`}>{props.text}</div>;
	}

	function renderContentChildren() {
		return [allowIcon() ? renderIcon() : null, renderText()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return (
		<button type="button" onClick={props.onClick} className={classNames(getBaseClassName(), props.className, props.variant, {useIcon: allowIcon()})}>
			{renderContent()}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	icon: PropTypes.string,
	variant: PropTypes.string,
	onClick: PropTypes.string,
};

Button.defaultProps = {
	className: '',
	icon: '',
	variant: 'contained',
	onClick: null,
};

export default Button;
