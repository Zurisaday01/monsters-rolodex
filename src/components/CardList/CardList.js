import React from 'react';
import './CardList.css';
import CardElement from '../CardElment/CardElement';

const CardList = props => {
	return (
		<div className='card-list'>
			{props.monsters.length === 0 ? (
				<p className='paragraph'>Not found</p>
			) : (
				props.monsters.map(monster => (
					<CardElement key={monster.id} monster={monster} />
				))
			)}
		</div>
	);
};

export default CardList;
