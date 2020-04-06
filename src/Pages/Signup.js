import React from 'react';
import { FormGroup, Form, Label, Input, Button, Container, Row, Col, NavLink } from 'reactstrap';
import axios from 'axios';

class Signup extends React.Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	};

	// Changement détat du state paré  à l'envoi
	handleChangeFirstname = (event) => {
		this.setState({ firstname: event.target.value });
	};
	handleChangeLastname = (event) => {
		this.setState({ lastname: event.target.value });
	};

	handleChangeEmail = (event) => {
		this.setState({ email: event.target.value });
	};
	handleChangePassword = (event) => {
		this.setState({ password: event.target.value });
	};

	// Au moment où ça submit

	handleSubmit = (event) => {
		event.preventDefault();
		//définition de l'objet user
		const user = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password
		};
		//requete post sur  la route d'inscription de l'api
		axios.post(`http://localhost:8000/api/v1/auth/register`, { user }).then((res) => {
			console.log(user);
			console.log(res);
			console.log(res.data);
		});
	};

	render() {
		return (
			<div>
				<Container className="pt-5">
					<Row>
						<Col sm="12" md={{ size: 6, offset: 3 }}>
							<Form onSubmit={this.handleSubmit}>
								<h1 className="text-center">VocalHost</h1>
								<hr />
								<FormGroup>
									<Label>Firstname</Label>
									<Input
										type="text"
										name="firstname"
										onChange={this.handleChangeFirstname}
										placeholder="Entrer votre prénom..."
									/>
								</FormGroup>
								<FormGroup>
									<Label>Lastname</Label>
									<Input
										type="text"
										name="lastname"
										onChange={this.handleChangeLastname}
										placeholder="Entrer votre nom..."
									/>
								</FormGroup>
								<FormGroup>
									<Label>Email</Label>
									<Input
										type="email"
										name="email"
										placeholder="Entrer votre adresse email..."
										onChange={this.handleChangeEmail}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Mot de passe</Label>
									<Input
										type="password"
										name="password"
										placeholder="Entrer votre mot de passe..."
										onChange={this.handleChangePassword}
									/>
								</FormGroup>

								<Button type="submit" color="primary" size="lg" block>
									Inscription
								</Button>
							</Form>
							<NavLink className="text-center" href={'/Login'}>
								Connexion
							</NavLink>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Signup;
