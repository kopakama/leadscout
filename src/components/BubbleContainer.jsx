import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import Button from './common/Button';
import BaseContainer from './common/BaseContainer';

class BubbleContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'BubbleContainer',
	};

	renderBubbles() {
		return (
			<div className={`${this.getBaseClassName()}__bubbles`}>
				<div className={`${this.getBaseClassName()}__bubble__image`} />
			</div>
		);
	}

	renderTryItOut() {
		const {t} = this.props;
		return (
			<div className={`${this.getBaseClassName()}__try`}>
				<div className={`${this.getBaseClassName()}__text`}>{t('startTrial')}</div>
				<Button className={`${this.getBaseClassName()}__button`} text={t('goToBot')} />
			</div>
		);
	}

	renderContentChildren() {
		return [this.renderBubbles(), this.renderTryItOut()];
	}
}

export default withTranslation()(BubbleContainer);
