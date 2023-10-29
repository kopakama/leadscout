import React from 'react';
import {withTranslation} from 'react-i18next';
import '../less/components/Header.less';
import BaseContainer from '../components/common/BaseContainer';

class FooterContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'FooterContainer',
	};

	renderLeftItems() {
		const className = `${this.getBaseClassName()}__left_items`;
		return (
			<div className={className}>
				All rights Reserved <span className="bold">© Company, 2021</span>
			</div>
		);
	}

	renderRightItems() {
		const className = `${this.getBaseClassName()}__right_items`;
		return (
			<div className={className}>
				Made with <span className="love">❤</span> by <span className="bold">трихуя</span>
			</div>
		);
	}

	renderContentChildren() {
		return [this.renderLeftItems(), this.renderRightItems()];
	}
}

export default withTranslation()(FooterContainer);
