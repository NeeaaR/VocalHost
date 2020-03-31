import React from 'react';
import { ModalBody, ModalFooter, Col, Row, ListGroup, ListGroupItem, Button } from 'reactstrap';
import Audio from './Audio';
import Profile from './Profile';
import Notifications from './Notifications';
import Preferences from './Preferences';
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
                <Profile/>
            )

        }
        else if (this.state.count === 1) {
            return (
                <Audio/>

            )
        }
        else if (this.state.count === 2) {
            return (
                <Notifications/>
            )

        }
        else if (this.state.count === 3) {
            return (
                <Preferences/>
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
                                <ListGroupItem onClick={this.connexion.bind(this)} tag="button" active>Connexion</ListGroupItem>
                                <ListGroupItem onClick={this.audio.bind(this)} tag="button">Audio</ListGroupItem>
                                <ListGroupItem onClick={this.rac.bind(this)} tag="button">Preferences</ListGroupItem>
                                <ListGroupItem onClick={this.confid.bind(this)} tag="button">Confidentialités</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col className="ml-1">
                            {this.change()}
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" disabled>Appliquer</Button>
                    <Button color="primary">Ok</Button>
                </ModalFooter>

            </div>
        )
    }
}

export default Settings;