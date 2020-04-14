import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Profile extends React.Component{
    render(){
        return(
            <div>
                <h5 className="text-center">CONNEXION</h5>
                <br/>
                <Form>
                <Row>
                    <Col>
                        <FormGroup>
                        <Label>Modifier votre image de profil</Label>
                        {/* Image de profil */}
                        </FormGroup>                   
                    </Col>
                    <Col>
                    <Label>Modifier votre pseudo</Label>
                    <Input type="text" name="pseudo" placeholder="Modifier votre pseudo"/>
                    </Col>
                </Row>
                    <FormGroup className="border-1 border-black">
                        <Label>Mot de passe actuel</Label>
                        <Input type="password" name="password" placeholder="Entrer votre mot de passe actuel" />
                        <Label>Nouveau mot de passe</Label>
                        <Input type="password" name="NewPassword" placeholder="Saisir votre nouveau mot de passe" />
                        <Label>Nouveau mot de passe</Label>
                        <Input type="password" name="NewPpassword2" placeholder="" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Profile