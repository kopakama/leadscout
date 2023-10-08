import React from 'react';
import '../less/components/Header.less';
import {useTranslation} from 'react-i18next';
import Button from './common/Button';

function BubbleBlock() {
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'BubbleBlock';
	}

	function renderBubbles() {
		return (
			<div className={`${getBaseClassName()}__bubbles`}>
				<div className={`${getBaseClassName()}__bubble__image`} />
			</div>
		);
	}

	function renderTryItOut() {
		return (
			<div className={`${getBaseClassName()}__try`}>
				<div className={`${getBaseClassName()}__text`}>{t('startTrial')}</div>
				<Button className={`${getBaseClassName()}__button`} text={t('goToBot')} />
			</div>
		);
	}

	function renderContentChildren() {
		return [renderBubbles(), renderTryItOut()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default BubbleBlock;
