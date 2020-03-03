import React from 'react';
import { Row, Col } from 'reactstrap';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';


class MembreSalon extends React.Component {
    
    render() {

        
        return (
            <div className="membre">
                <Col className="border-right h-100">
                    <Row>
                        <div className="">
                            <h1 className="pb-5 pt-4 text-center">Appels</h1>
                            <ChatList
                                className='chat-list'
                                dataSource={[
                                    {
                                        avatar: '',
                                        alt: '',
                                        title: 'Facebook',
                                        subtitle: 'What are you doing?',
                                        date: new Date(),
                                        unread: 0,
                                    },
                                ]} />
                        </div>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default MembreSalon;