import React from 'react';
import {useTranslation} from 'react-i18next';
import '../less/components/Header.less';
import WelcomeImage from '../img/welcome.gif';
import Button from './common/Button';

function WelcomeBlock() {
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'WelcomeBlock';
	}

	function renderLeftItems() {
		const className = `${getBaseClassName()}__left_items`;
		return (
			<div className={className}>
				<div className={`${className}__title`}>
					<h1>{t('welcomeLeftBlockTitle')}</h1>
				</div>
				<div className={`${className}__descr`}>{t('welcomeLeftBlockDescr')}</div>
				<div className={`${className}__buttons`}>
					<Button className={`${className}__button`} text={t('plan')} icon="download" />
					<Button className={`${className}__button`} text={t('howItWorks')} variant="outlined" icon="play" />
				</div>
			</div>
		);
	}

	function renderRightItems() {
		const className = `${getBaseClassName()}__right_items`;
		return (
			<div className={className}>
				<img className={`${getBaseClassName()}__right_items__image`} src={WelcomeImage} alt="" />
			</div>
		);
	}

	function renderContentChildren() {
		return [renderLeftItems(), renderRightItems()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default WelcomeBlock;
