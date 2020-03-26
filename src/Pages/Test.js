import React from 'react';
import axios from 'axios';

class Test extends React.Component {
	state = {
		person: []
	};

	//Permet de récupérer l'API. On a besoin d'une requête asynchrone (node etc)
	async componentDidMount() {
		//On définit la route de l'api pour réupérer les users
		const url = 'http://localhost:8000/api/v1/users';
		const self = this;

		axios.get(url).then(function(res) {
			console.log(res.data[0]);
			self.setState({ person: res.data[0] });
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.person.email}</p>
				<p>{this.state.person.firstname}</p>
			</div>
		);
	}
}

export default Test;
