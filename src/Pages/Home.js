import React from 'react';
import Send from '../Components/Send';
import Chat from '../Components/Chat';
import ChatImage from '../Components/ChatImage';
import Nav from '../Components/Nav';
import Membre from '../Components/Membre';
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
                        <Membre />
                    </Col>
                    <Col className="p-0" xs="8">
                        <Chat />
                        <ChatImage/>
                        <Chat />
                        <ChatImage/>
                        <Chat />
                        <ChatImage/>
                        <Chat />
                        <ChatImage/>
                        <Chat />
                        <ChatImage/>
                        <Send />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;