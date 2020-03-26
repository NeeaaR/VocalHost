import React from 'react';
import { Row, Col, Modal, ModalHeader } from 'reactstrap';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';
import Plus from './Plus';


class MembreMess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalisOpen: false
        }
    }
    toggleModal() {
        this.setState({
            modalisOpen: !this.state.modalisOpen
        })
    }

    render() {


        return (
            <div className="membre">
                <Col className="border-right h-100">
                    <Row>
                        <div className="">
                            <h1 className="pb-3 pt-4 text-center">{this.props.name}</h1>
                            <div className="text-center pb-4">
                                <button onClick={this.toggleModal.bind(this)} className="plus">{this.props.option} ></button>
                                <Modal isOpen={this.state.modalisOpen} size="lg">
                                    <ModalHeader toggle={this.toggleModal.bind(this)}>{this.props.option}</ModalHeader>
                                    <Plus></Plus>
                                </Modal>
                            </div>
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

export default MembreMess;


