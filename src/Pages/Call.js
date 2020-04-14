import React from 'react';
import Send from '../Components/Send';
import Nav from '../Components/Nav';
import MembreCall from '../Components/Membre/MembreCall';
import { Row, Col } from 'reactstrap';

class Call extends React.Component {
    componentDidMount(){
        document.title = "VocalHost | Appels"
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs="1" className="p-0">
                        <Nav />
                    </Col>
                    <Col xs="2" className="p-0">
                        <MembreCall />
                    </Col>
                    <Col className="p-0" xs="8">
                        <Send />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Call;