import React from 'react';
import {ModalBody,ModalFooter, Col, Row, ListGroup, ListGroupItem, TabContent} from 'reactstrap';
import { useState } from 'react';
class Settings extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                modalisOpen: false,
                activeTab: 1
            }
    }

    toggleModal(){
        this.setState({
            modalisOpen: !this.state.modalisOpen
        })
    }

    ControlledTabs(){
        const [key, setKey] = useState('home')
    }

    ActiveTab(){
        
    }

    render(){        
        return(
            <div>
                <ModalBody className="pt-0 pb-0">
                    <Row>
                        <Col className="p-0">
                            <ListGroup>
                                <ListGroupItem tag="button" href="connexion" action>Connexion</ListGroupItem>
                                <ListGroupItem tag="button" href="#" action>Audio</ListGroupItem>
                                <ListGroupItem tag="button" href="#" action>Raccourcis</ListGroupItem>
                                <ListGroupItem tag="button" href="#" action>Confidentialités</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col className="ml-1">
                            <Row>Contenu de la page</Row>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>Copyright</ModalFooter>  
            </div>
        )
    }
}

export default Settings;