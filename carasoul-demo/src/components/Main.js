import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Items from './Items';

import Image1 from '../img/1.jpg';

const Example = () => {
	let items = [];
	for (let i = 0; i < 5; i++) {
		items.push(<Items key={i} id={i} img={Image1} />);
	}

	return (
		<Carousel
			animation='slide'
			duration='500'
			indicatorIconButtonProps={{
				style: {
					padding: '5px',
					margin: '0 10px',
					backgroundColor: '#86827e',
					color: 'transparent',
					transitionDuration: '500ms',
					transitionProperty: 'padding, border-radius',
				},
			}}
			activeIndicatorIconButtonProps={{
				style: {
					padding: '5px 20px',
					backgroundColor: '#ffffff',
					borderRadius: '30px',
				},
			}}
			indicatorContainerProps={{
				style: {
					zIndex: 1,
					transform: 'translateY(-30px)',
					position: 'relative',
				},
			}}
		>
			{items}
		</Carousel>
	);
};

export default Example;
