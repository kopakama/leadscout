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

	getCards() {
		const {t} = this.props;

		return [
			<Card icon="icon" title={t('addChats')} desc={t('addChatsDesc')} />,
			<Card icon="icon" title={t('addKeywords')} desc={t('addKeywordsDesc')} />,
			<Card icon="icon" title={t('getHotLeads')} desc={t('getHotLeadsDesc')} />,
		];
	}

	renderCards() {
		return <div className={`${this.getBaseClassName()}__cards`}>{this.getCards()}</div>;
	}

	renderVideo() {
		return (
			<div className={`${this.getBaseClassName()}__video`}>
				<iframe
					className={`${this.getBaseClassName()}__video_content`}
					src="https://www.youtube.com/embed/J1j4yo9p110?si=i10aEE70Rr63RrQt"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		);
	}

	renderContentChildren() {
		return [this.renderVideo(), this.renderCards()];
	}
}

export default withTranslation()(PresentationContainer);
