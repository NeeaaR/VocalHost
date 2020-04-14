import React from 'react';
import '../assets/css/Login.css';
import { FormGroup, Form, Label, Input, Button, Container, Row, Col, CustomInput, NavLink } from 'reactstrap';
import axios from 'axios';

class Login extends React.Component {
	// On definit un state pour récupérer les deux paramètres

	state = {
		email: '',
		password: ''
	};

	// Changement détat du state paré  à l'envoi
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
			email: this.state.email,
			password: this.state.password
		};
		//requete post sur  la route d'authentificartion de l'api
		axios.post(`http://localhost:8000/api/v1/auth/login`, { user }).then((res) => {
			console.log(user);
			console.log(res);
			console.log(res.data);
		});
	};

	componentDidMount() {
		document.title = 'VocalHost | Connexion';
	}

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
									<Label>Email</Label>
									<Input
										type="email"
										name="email"
										onChange={this.handleChangeEmail}
										placeholder="Entrer votre adresse email..."
									/>
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Input
										type="password"
										name="password"
										onChange={this.handleChangePassword}
										placeholder="Entrer votre mot de passe..."
									/>
								</FormGroup>
								<FormGroup>
									<CustomInput
										type="switch"
										id="exampleCustomSwitch"
										name="customSwitch"
										label="Rester connecté"
									/>
								</FormGroup>
								<Button type="submit" color="primary">
									Connexion
								</Button>
							</Form>
							<NavLink className="text-center" href={'/signup'}>
								Inscription
							</NavLink>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Login;
