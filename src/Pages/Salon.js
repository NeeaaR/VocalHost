import React from 'react';
import Send from '../Components/Send';
import Nav from '../Components/Nav';
import MembreSalon from '../Components/MembreSalon';
import { Row, Col } from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="1" className="p-0">
                        <Nav />
                    </Col>
                    <Col xs="2" className="p-0">
                        <MembreSalon />
                    </Col>
                    <Col className="p-0" xs="8">
                        
                        <Send />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;