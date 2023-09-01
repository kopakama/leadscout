import React, {useEffect} from 'react';
import {withTranslation} from 'react-i18next';
import '../less/index.less'

function LandingContainer({loading, requestExamples, classes, t, err, ...props}) {
	useEffect(() => {
		props.history.push('/');
	}, [props.history]);

	const renderContentChildren = () => {
		return [];
	};

	const renderContent = () => {
		return (
			<div>
				{renderContentChildren()}
			</div>
		);
	};

	return <div>{renderContent()}</div>;
}

export default withTranslation()(LandingContainer);
