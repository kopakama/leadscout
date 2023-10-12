import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import BaseContainer from './common/BaseContainer';

class PhoneSliderContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'PhoneSliderContainer',
	};

	getBaseClassName() {
		return 'PhoneSliderContainer';
	}

	getSliderItemsCount() {
		return 3;
	}

	renderSwiperSlide({title, text}) {
		return (
			<swiper-slide class={`${this.getBaseClassName()}__swiper_slide`}>
				<div className={`${this.getBaseClassName()}__swiper_slide__phone`}>
					<div className={`${this.getBaseClassName()}__swiper_slide__phone_image`} />
				</div>
				<div className={`${this.getBaseClassName()}__swiper_slide__text`}>
					<div className={`${this.getBaseClassName()}__swiper_slide__title`}>{title}</div>
					<div className={`${this.getBaseClassName()}__swiper_slide__desc`}>{text}</div>
				</div>
			</swiper-slide>
		);
	}

	renderSliderItems() {
		const result = [];
		const {t} = this.props;
		for (let i = 1; i <= this.getSliderItemsCount(); i++) {
			result.push(this.renderSwiperSlide({title: t(`phoneSliderItemTitle${i}`), text: t(`phoneSliderItemText${i}`)}));
		}
		return result;
	}

	renderPhoneSwiper() {
		return (
			<swiper-container class={`${this.getBaseClassName()}__swiper`} slides-per-view="1" speed="500" loop="true" autoplay="true">
				{this.renderSliderItems()}
			</swiper-container>
		);
	}

	renderContentChildren() {
		return [this.renderPhoneSwiper()];
	}
}

export default withTranslation()(PhoneSliderContainer);
