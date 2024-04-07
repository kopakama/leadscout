import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import BaseContainer from '../components/common/BaseContainer';
import Accordion from '../components/common/Accordion';

class FaqContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'FaqContainer',
	};

	getItems() {
		const {t} = this.props;
		return [
			{
				question: t('faqQuestion1'),
				answer: t('faqAnswer1'),
				allowUl: true,
			},
			{
				question: t('faqQuestion2'),
				answer: t('faqAnswer2'),
			},
			{
				question: t('faqQuestion3'),
				answer: t('faqAnswer3'),
			},
			// {
			// 	question: t('faqQuestion4'),
			// 	answer: t('faqAnswer4'),
			// },
			// {
			// 	question: t('faqQuestion5'),
			// 	answer: t('faqAnswer5'),
			// },
		];
	}

	renderTitle() {
		const {t} = this.props;
		return <div className={`${this.getBaseClassName()}__title`}>{t('faq')}</div>;
	}

	renderAccordion() {
		return <Accordion items={this.getItems()} />;
	}

	renderContentChildren() {
		return [this.renderTitle(), this.renderAccordion()];
	}
}

export default withTranslation()(FaqContainer);
