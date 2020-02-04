import React from 'react';
import { FormGroup, Form, Label, Input, Button, Container, Row, Col, CustomInput} from 'reactstrap';

class Login extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;