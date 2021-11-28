import { Component } from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	async componentDidMount() {
		try {
			const users = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await users.json();
			this.setState({ monsters: data });
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	// This keyword belongs to App -> lexical scope
	// handleChange = e => {
	// 	this.setState({ searchField: e.target.value });
	// };

	//  this this keyword belongs to the input
	// handleChange(e) {
	// 	this.setState({ searchField: e.target.value });
	// }

	render() {
		const { monsters, searchField } = this.state;

		const filterdMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder='Search monster'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filterdMonsters} />
			</div>
		);
	}
}
export default App;
