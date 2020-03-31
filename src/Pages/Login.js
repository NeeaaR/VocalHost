import React from 'react';
import { FormGroup, Form, Label, Input, Button, Container, Row, Col, CustomInput, NavLink} from 'reactstrap';

class Login extends React.Component{
    componentDidMount(){
        document.title = "VocalHost | Connexion"
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
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Entrer votre adresse email..." />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" placeholder="Entrer votre mot de passe..." />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Rester connecté" />
                            </FormGroup>
                            <Button color="primary">Connexion</Button>
                        </Form>
                        <NavLink className="text-center" href={"/signup"}>
                                Inscription
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;