import React from 'react';
import { FormGroup, Form, Label, Input, Button, Container, Row, Col, NavLink} from 'reactstrap';
import '../assets/css/Login.css'

class Signup extends React.Component{
    componentDidMount(){
        document.title = "VocalHost | Inscription"
    }
    constructor(props){
        super(props);
        this.state = {
            pseudo: '',
            email: '',
            password: '',
            birthday: '',
            sexe: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({pseudo: event.target.value});
        console.log(this.state.pseudo)
    }

    Day(){
        let numbers = []
        for(let i = 1; i<= 31; i++){
            numbers.push(i)
        }
        const day = numbers.map((number) => <option>{number}</option>)
        return day
    }
    Months(){
        const months = [
            {id: '01', month: 'Janvier'},
            {id: '02', month: 'Février'},
            {id: '03', month: 'Mars'},
            {id: '04', month: 'Avril'},
            {id: '05', month: 'Mai'},
            {id: '06', month: 'Juin'},
            {id: '07', month: 'Juillet'},
            {id: '08', month: 'Août'},
            {id: '09', month: 'Septembre'},
            {id: '10', month: 'Octobre'},
            {id: '11', month: 'Novembre'},
            {id: '12', month: 'Décembre'}
        ]
        const month = months.map((month) => <option key={month.id} value={month.id}>{month.month}</option>)
        return month
    }
    Years(){
        let years = []
        for(let i = 2020; i>= 1920; i--){
            years.push(i)
        }
        const year = years.map((year) => <option>{year}</option>)
        return year
    }
    render(){
        return(
            <div>
                <Container className="pt-5">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <h1 className="text-center">VocalHost</h1>
                            <hr/>
                            <FormGroup>
                                <Label>Pseudo</Label>
                                <Input type="text" name="pseudo" value={this.state.pseudo} onChange={this.handleChange} placeholder="Entrer votre pseudonyme..." />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Entrer votre adresse email..." />
                            </FormGroup>
                            <FormGroup>
                                <Label>Mot de passe</Label>
                                <Input type="password" name="password" placeholder="Entrer votre mot de passe..." />
                            </FormGroup>
                            <FormGroup>
                                <Label>Date de naissance :</Label>
                            </FormGroup>
                            {/* <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Input type="select" name="day">{this.Day()}</Input>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Input type="select" name="month">{this.Months()}</Input>
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Input type="select" name="year" id="exampleSelect">{this.Years()}</Input>
                                </FormGroup>  
                                </Col>
                            </Row> */}
                            <FormGroup>
                                <Label>Sexe</Label>
                                <Input type="select" name="select">
                                    <option>Homme</option>
                                    <option>Femme</option>
                                    <option>Non binaire</option>
                                </Input>
                            </FormGroup>
                            <Button color="primary" size="lg" block>Inscription</Button>
                        </Form>
                            <NavLink className="text-center" href={"/Login"}>
                                Connexion
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Signup;