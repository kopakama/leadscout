import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../less/components/Header.less';
import {isMobile} from 'react-device-detect';
import classNames from 'classnames';
import Button from './common/Button';

function Header() {
	const [isMenuOpened, setMenuOpened] = useState(false);
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'Header';
	}

	function getMenuItems() {
		return [
			{text: t('contacts'), elementId: 'ContactBubbleContainer'},
			{text: t('subscribe'), elementId: 'SubscriptionsContainer'},
			{text: t('faq'), elementId: 'FaqContainer'},
		];
	}

	function handleToggleMenu() {
		setMenuOpened(!isMenuOpened);
	}

	function renderMenuItem(text, elementId) {
		return (
			<button
				type="button"
				className={`${getBaseClassName()}__menu_item`}
				onClick={(e) => {
					e.preventDefault(); // Stop Page Reloading
					const elem = document.getElementById(elementId);
					elem.scrollIntoView();
				}}
			>
				{text}
			</button>
		);
	}

	function renderLogo() {
		return <div className={`${getBaseClassName()}__logo`}>{t('mainTitle')}</div>;
	}

	function renderHowItWorksButton() {
		return <Button className={`${getBaseClassName()}__button`} text={t('trial')} />;
	}

	function renderMenuItems() {
		return <div className={`${getBaseClassName()}__menu_items`}>{getMenuItems().map((item) => renderMenuItem(item.text, item.elementId))}</div>;
	}

	function renderMobileMenu() {
		return (
			<div className={classNames(`${getBaseClassName()}__mobile_menu`, {opened: isMenuOpened})}>
				<div className={`${getBaseClassName()}__menu_items`}>
					{getMenuItems().map((item) => renderMenuItem(item.text, item.elementId))}
					<div className={`${getBaseClassName()}__menu_item`}>{renderHowItWorksButton()}</div>
				</div>
			</div>
		);
	}

	function renderBurger() {
		return (
			<button type="button" className={classNames(`${getBaseClassName()}__burger`, {opened: isMenuOpened})} onClick={() => handleToggleMenu()}>
				<span />
			</button>
		);
	}

	function renderContentChildren() {
		return [renderLogo(), isMobile ? [renderBurger(), renderMobileMenu()] : renderMenuItems(), !isMobile ? renderHowItWorksButton() : null];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default Header;
