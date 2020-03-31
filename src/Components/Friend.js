import React from 'react';
import { ModalBody, ModalFooter, Col, Row, ListGroup, ListGroupItem, Button } from 'reactstrap';
class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            active: false
        }
    }

    isActive() {

    }

    change() {
        if (this.state.count === 0) {
            return (
                <div>
                    Ajouter un ami
                </div>
            )

        }
        else if (this.state.count === 1) {
            return (
                <div></div>
            )
        }
        else if (this.state.count === 2) {
            return (
                <div></div>
            )

        }
        else if (this.state.count === 3) {
            return (
                <div></div>
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
            <div className="">

                <Row className="setFriend">
                    <Col className="friend" onClick={this.connexion.bind(this)} active>Ajouter un ami</Col>
                    <Col className="friend" onClick={this.audio.bind(this)}>Mes amis</Col>
                    <Col className="friend" onClick={this.rac.bind(this)}>Tous</Col>
                    <Col className="friend" onClick={this.confid.bind(this)}>Bloqué</Col>
                </Row>
                <Row className="ml-1">
                    {this.change()}
                </Row>
            </div>
        )
    }
}

export default Settings;