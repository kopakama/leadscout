import React from 'react';
import {useTranslation} from 'react-i18next';
import '../less/components/Header.less';
import classNames from 'classnames';

function HowItWorksBlock() {
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'HowItWorksBlock';
	}

	function renderCard(icon, title, desc) {
		return (
			<div className={`${getBaseClassName()}__card`}>
				<div className={classNames('icon', icon)}>
					<div className="content" />
				</div>
				<div className="title">{title}</div>
				<div className="desc">{desc}</div>
			</div>
		);
	}

	function getCards() {
		return [renderCard('icon', t('addChats'), t('addChatsDesc')), renderCard('icon', t('addKeywords'), t('addKeywordsDesc')), renderCard('icon', t('getHotLeads'), t('getHotLeadsDesc'))];
	}

	function renderCards() {
		return <div className={`${getBaseClassName()}__cards`}>{getCards()}</div>;
	}

	function renderTitle() {
		return <div className={`${getBaseClassName()}__title`}>{t('howItWorks')}</div>;
	}

	function renderContentChildren() {
		return [renderTitle(), renderCards()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default HowItWorksBlock;
