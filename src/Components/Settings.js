import React from 'react';
import { ModalBody, ModalFooter, Col, Row, ListGroup, ListGroupItem, TabContent } from 'reactstrap';
import { useState } from 'react';
class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    change() {
        if (this.state.count == 0) {
            return (
                <Row>Connexion</Row>
            )

        }
        else if (this.state.count == 1) {
            return (
                <Row>Audio</Row>

            )
        }
        else if (this.state.count == 2) {
            return (
                <Row>Raccourcis</Row>
            )

        }
        else if (this.state.count == 3) {
            return (
                <Row>Confidential</Row>
            )
        }
    }

    connexion(){
        this.setState({
            count: 0
        })
    }
    audio(){
        this.setState({
            count: 1
        })
    }
    rac(){
        this.setState({
            count: 2
        })
    }
    confid(){
        this.setState({
            count: 3
        })
    }

    render() {
        return (
            <div>
                <ModalBody className="pt-0 pb-0">
                    <Row>
                        <Col className="p-0">
                            <ListGroup>
                                <ListGroupItem onClick={this.connexion.bind(this)} tag="button">Connexion</ListGroupItem>
                                <ListGroupItem onClick={this.audio.bind(this)} tag="button">Audio</ListGroupItem>
                                <ListGroupItem onClick={this.rac.bind(this)} tag="button">Raccourcis</ListGroupItem>
                                <ListGroupItem onClick={this.confid.bind(this)} tag="button">Confidentialités</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col className="ml-1">
                            {this.change()}
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>Copyright</ModalFooter>

            </div>
        )
    }
}

export default Settings;