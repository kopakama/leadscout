import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

function Accordion({items}) {
	const [clicked] = useState(0);

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<AccordionItem active={clicked === index} item={item} />
			))}
		</div>
	);
}

Accordion.propTypes = {
	items: PropTypes.array.isRequired,
};

export default Accordion;
