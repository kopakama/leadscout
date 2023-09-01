import React, {useEffect} from 'react';
import {withTranslation} from 'react-i18next';

function Header({loading, requestExamples, classes, t, err, ...props}) {
	useEffect(() => {
		props.history.push('/');
	}, [props.history]);

	const renderContentChildren = () => {
		return [];
	};

	const renderContent = () => {
		return (
			<div className="content">
				{renderContentChildren()}
			</div>
		);
	};

	return <div>{renderContent()}</div>;
}

export default withTranslation()(Header);
