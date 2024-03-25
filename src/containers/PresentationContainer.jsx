import '../less/components/Header.less';
import React from 'react';
import {withTranslation} from 'react-i18next';
import BaseContainer from '../components/common/BaseContainer';
import Icon from '../components/common/Icon';
import Card from '../components/Card';

class PresentationContainer extends BaseContainer {
	static defaultProps = {
		baseClassName: 'PresentationContainer',
	};

	renderCard(icon, title, desc) {
		return (
			<div className={`${this.getBaseClassName()}__card`}>
				<Icon icon="icon" />
				<div className="title">{title}</div>
				<div className="desc">{desc}</div>
			</div>
		);
	}

	getCardsTopGroup() {
		const {t} = this.props;

		return [
			// <Card icon="category" title={t('chatCategories')} desc={t('chatCategoriesDesc')} />,
			<Card icon="support" title={t('247Support')} desc={t('247SupportDesc')} />,
			<Card icon="lightning" title={t('fastSetup')} desc={t('fastSetupDesc')} />,
		];
	}

	getCardsBottomGroup() {
		const {t} = this.props;

		return [<Card icon="category-2" title={t('keyChatCategories')} desc={t('keyChatCategoriesDesc')} />, <Card icon="table-file" title={t('fileUpload')} desc={t('fileUploadDesc')} />];
	}

	renderCardsTopGroup() {
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCardsTopGroup()}</div>;
	}

	renderCardsBottomGroup() {
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCardsBottomGroup()}</div>;
	}

	renderVideo() {
		return (
			<div className={`${this.getBaseClassName()}__video`}>
				<iframe
					className={`${this.getBaseClassName()}__video_content`}
					src=""
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		);
	}

	renderContentChildren() {
		// return [this.renderVideo(), this.renderCardsTopGroup(), this.renderCardsBottomGroup()];
		return [this.renderCardsTopGroup()];
	}
}

export default withTranslation()(PresentationContainer);
