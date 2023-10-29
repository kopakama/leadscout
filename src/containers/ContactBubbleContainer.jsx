import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import classNames from 'classnames';
import BaseContainer from '../components/common/BaseContainer';

class ContactBubbleContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'ContactBubbleContainer',
	};

	renderBubbles() {
		return (
			<div className={`${this.getBaseClassName()}__bubbles`}>
				<div className={`${this.getBaseClassName()}__bubble__image`} />
			</div>
		);
	}

	renderContact() {
		const {t} = this.props;
		return (
			<div className={`${this.getBaseClassName()}__contact_block`}>
				<div className={`${this.getBaseClassName()}__text`}>{t('contactUs')}</div>
				<div className={`${this.getBaseClassName()}__contacts`}>
					<div className={classNames(`${this.getBaseClassName()}__contact`, 'email')}>
						<div className={`${this.getBaseClassName()}__contact_title`}>Напишите на почту</div>
						<div className={`${this.getBaseClassName()}__contact_desc`}>
							Напишите нам по эл. адресу <a href="mailto: abc@example.com">abc@example.com</a>
						</div>
					</div>
					<div className={classNames(`${this.getBaseClassName()}__contact`, 'telegram')}>
						<div className={`${this.getBaseClassName()}__contact_title`}>Напишите в телеграм</div>
						<div className={`${this.getBaseClassName()}__contact_desc`}>
							Напишите нам в телеграм по адресу <a href="https://www.google.com/">telega.link</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderContentChildren() {
		return [this.renderBubbles(), this.renderContact()];
	}
}

export default withTranslation()(ContactBubbleContainer);
