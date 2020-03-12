import React from 'react';
import { FormGroup, Form, Label, Input, Col, Row } from 'reactstrap';

class Audio extends React.Component{
    render(){
        return(
           <div>
                <h5 className="text-center m-2">PARAMETRES VOCAUX</h5>
                <Form className="pt-3 text-uppercase font-weight-bold">
                    <Row>
                    <Col>
                    <FormGroup>
                        <Label>Peripherique entrée</Label>
                        <Input type="select" name="select">
                            <option>Default</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Peripherique sortie</Label>
                        <Input type="select" name="select">
                            <option>Default</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    </Row>
                </Form>
           </div> 
        )
    }
}

export default Audio