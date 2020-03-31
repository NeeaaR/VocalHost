import React from 'react';
import Send from '../Components/Send';
import Nav from '../Components/Nav';
import { Row, Col } from 'reactstrap';
import Membre from '../Components/Membre';

class Home extends React.Component {
    componentDidMount(){
        document.title = "VocalHost | Messages"
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs="1" className="p-0">
                        <Nav />
                    </Col>
                    <Col xs="2" className="p-0">
                        <Membre name = "Privés" option = "Amis"/>
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