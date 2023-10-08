import React from 'react';
import {useTranslation} from 'react-i18next';
import '../less/components/Header.less';

function PhoneSliderBlock() {
	const {t} = useTranslation();

	function getBaseClassName() {
		return 'PhoneSliderBlock';
	}

	function getSliderItemsCount() {
		return 3;
	}

	function renderSwiperSlide({title, text}) {
		return (
			<swiper-slide class={`${getBaseClassName()}__swiper_slide`}>
				<div className={`${getBaseClassName()}__swiper_slide__phone`}>
					<div className={`${getBaseClassName()}__swiper_slide__phone_image`} />
				</div>
				<div className={`${getBaseClassName()}__swiper_slide__text`}>
					<div className={`${getBaseClassName()}__swiper_slide__title`}>{title}</div>
					<div className={`${getBaseClassName()}__swiper_slide__desc`}>{text}</div>
				</div>
			</swiper-slide>
		);
	}

	function renderSliderItems() {
		const result = [];
		for (let i = 1; i <= getSliderItemsCount(); i++) {
			result.push(renderSwiperSlide({title: t(`phoneSliderItemTitle${i}`), text: t(`phoneSliderItemText${i}`)}));
		}
		return result;
	}

	function renderPhoneSwiper() {
		return (
			<swiper-container class={`${getBaseClassName()}__swiper`} slides-per-view="1" speed="500" loop="true" autoplay="true">
				{renderSliderItems()}
			</swiper-container>
		);
	}

	function renderContentChildren() {
		return [renderPhoneSwiper()];
	}

	function renderContent() {
		const className = `${getBaseClassName()}__content`;
		return <div className={className}>{renderContentChildren()}</div>;
	}

	return <div className={getBaseClassName()}>{renderContent()}</div>;
}

export default PhoneSliderBlock;
