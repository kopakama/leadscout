import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AccordionItem({item}) {
	const {question, answer, allowUl = false} = item;
	const contentEl = useRef();
	const [clicked, setClicked] = useState(false);

	function handleToggle() {
		setClicked((prev) => !prev);
	}

	function getBaseClassName() {
		return 'AccordionItem';
	}

	function renderAnswer(text) {
		let parsedText = text;
		if (allowUl) {
			parsedText = parsedText.split('\n');
			const firstEl = parsedText[0];
			parsedText.splice(0, 1);
			return (
				<div>
					{firstEl}
					<ul style={{marginTop: '5px', marginBottom: 0}}>
						{parsedText.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
			);
		}
		return <div>{text}</div>;
	}

	return (
		<div className={classNames(getBaseClassName(), {clicked})}>
			<button type="button" className="button" onClick={handleToggle}>
				{question}
				<span className="control">^</span>
			</button>
			<div
				ref={contentEl}
				className={classNames(`${getBaseClassName()}__answer_wrapper`)}
				style={clicked ? {height: contentEl.current.scrollHeight, 'margin-top': '5em'} : {height: '0px', visibility: 'hidden'}}
			>
				<div className={`${getBaseClassName()}__answer`}>{renderAnswer(answer)}</div>
			</div>
		</div>
	);
}

AccordionItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default AccordionItem;
