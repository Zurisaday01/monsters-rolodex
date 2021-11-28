import React from 'react';
import './CardElement.css';

const CardElement = props => {
	return (
		<div className='card-container'>
			<img
				src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
			/>
			<h2 key={props.monster.id}>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
};

export default CardElement;
