import React from 'react';
import { ModalBody, ModalFooter, Col, Row, ListGroup, ListGroupItem, TabContent } from 'reactstrap';
import { useState } from 'react';
class Plus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    change() {
        if (this.state.count == 0) {
            return (
                <div>
                   <h5 className="text-center mt-2">Ajouter un ami</h5>
                </div>

            )

        }
        else if (this.state.count == 1) {
            return (
                <div>
                    <Row>Ajouter un ami</Row>
                </div>

            )
        }
        else if (this.state.count == 2) {
            return (
                <div>
                    <Row>Ajouter un ami</Row>
                </div>
            )

        }
        else if (this.state.count == 3) {
            return (
                <div>
                    <Row>Ajouter un ami</Row>
                </div>
            )
        }
    }

    connexion() {
        this.setState({
            count: 0
        })
    }
    audio() {
        this.setState({
            count: 1
        })
    }
    rac() {
        this.setState({
            count: 2
        })
    }
    confid() {
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
                                <ListGroupItem onClick={this.connexion.bind(this)} tag="button">Ajouter un ami</ListGroupItem>
                                <ListGroupItem onClick={this.audio.bind(this)} tag="button">Visionner ses amis</ListGroupItem>
                                <ListGroupItem onClick={this.rac.bind(this)} tag="button">...</ListGroupItem>
                                <ListGroupItem onClick={this.confid.bind(this)} tag="button">...</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col className="ml-1">
                            {this.change()}
                        </Col>
                    </Row>
                </ModalBody>

            </div>
        )
    }
}

export default Plus;