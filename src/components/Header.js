import React from 'react';
import {useTranslation} from 'react-i18next';
import '../less/components/Header.less';
import Button from './common/Button';

function Header() {
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'Header';
	}

	function getMenuItems() {
		return [
			{text: t('ourCases'), elementId: 'products'},
			{text: t('team'), elementId: 'useCases'},
		];
	}

	function renderMenuItem(text, elementId) {
		return (
			<button
				type="button"
				className={`${getBaseClassName()}__menu_item`}
				onClick={(e) => {
					const elem = document.getElementById(elementId);
					e.preventDefault(); // Stop Page Reloading
					elem.scrollIntoView();
				}}
			>
				{text}
			</button>
		);
	}

	function renderMenuItems() {
		return <div className={`${getBaseClassName()}__menu_items`}>{getMenuItems().map((item) => renderMenuItem(item.text, item.elementId))}</div>;
	}

	function renderLogo() {
		return <div className={`${getBaseClassName()}__logo`}>{t('mainTitle')}</div>;
	}

	function renderHowItWorksButton() {
		return <Button className={`${getBaseClassName()}__button`} text={t('trial')} />;
	}

	function renderContentChildren() {
		return [renderLogo(), renderMenuItems(), renderHowItWorksButton()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default Header;
