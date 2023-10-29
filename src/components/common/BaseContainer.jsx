import React from 'react';
import PropTypes from 'prop-types';

class BaseContainer extends React.Component {
	static propTypes = {
		baseClassName: PropTypes.string,
	};

	static defaultProps = {
		baseClassName: '',
	};

	getBaseClassName() {
		return this.props.baseClassName;
	}

	renderContentChildren() {
		return [];
	}

	renderContent() {
		const className = `${this.getBaseClassName()}__content`;
		return <div className={className}>{this.renderContentChildren()}</div>;
	}

	render() {
		return (
			<div id={this.getBaseClassName()} className={this.getBaseClassName()}>
				{this.renderContent()}
			</div>
		);
	}
}

export default BaseContainer;
