import React from 'react';
import { FormGroup, Form, Label, Input, Col, Row, Button, CustomInput } from 'reactstrap';

class Audio extends React.Component{
    
    MicrophoneTest(){
        var h;
        var soundAllowed = function (stream) {
            window.persistAudioStream = stream;
            
        }
    
        var soundNotAllowed = function (error) {
            h.innerHTML = "Vous devez autoriser votre micro.";
            console.log(error);
        }
        navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed);
    }

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
                <hr/>
                <FormGroup>
                    <Button color="primary" onClick={this.MicrophoneTest}>Test Micro</Button>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label>Ajuster le son du micro :</Label>
                    <CustomInput type="range" id="exampleCustomRange" name="customRange" />
                </FormGroup>
           </div> 
        )
    }
}

export default Audio