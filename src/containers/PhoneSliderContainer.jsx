import React from 'react';
import '../less/components/Header.less';
import {withTranslation} from 'react-i18next';
import classNames from 'classnames';
import BaseContainer from '../components/common/BaseContainer';

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

	renderSwiperSlide(index) {
		const {t} = this.props;

		return (
			<swiper-slide class={`${this.getBaseClassName()}__swiper_slide`}>
				<div className={`${this.getBaseClassName()}__swiper_slide__phone`}>
					<div className={classNames(`${this.getBaseClassName()}__swiper_slide__phone_image`, `image_${index}`)} />
				</div>
				<div className={`${this.getBaseClassName()}__swiper_slide__text`}>
					<div className={`${this.getBaseClassName()}__swiper_slide__title`}>{t(`phoneSliderItemTitle${index}`)}</div>
					<div className={`${this.getBaseClassName()}__swiper_slide__desc`}>{t(`phoneSliderItemText${index}`)}</div>
				</div>
			</swiper-slide>
		);
	}

	renderSliderItems() {
		const result = [];
		for (let i = 1; i <= this.getSliderItemsCount(); i++) {
			result.push(this.renderSwiperSlide(i));
		}
		return result;
	}

	renderPhoneSwiper() {
		return (
			<swiper-container
				class={`${this.getBaseClassName()}__swiper`}
				slides-per-view="1"
				speed="500"
				loop="true"
				navigation="true"
				injectStyles={[`.swiper-button-next, .swiper-button-prev {opacity: 0.5;color: #FE9A52;}`]}
			>
				{this.renderSliderItems()}
			</swiper-container>
		);
	}

	renderContentChildren() {
		return [this.renderPhoneSwiper()];
	}
}

export default withTranslation()(PhoneSliderContainer);
