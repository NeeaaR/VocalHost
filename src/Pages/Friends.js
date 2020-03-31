import React from 'react';
import Send from '../Components/Send';
import Nav from '../Components/Nav';
import { Row, Col } from 'reactstrap';
import Membre from '../Components/Membre/Membre';
import Friend from '../Components/Friend';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        document.title = "VocalHost | Messages"
    }
    change(){

        if (this.state.count == 0) {
            return (
                <Send />

            )

        }
        // else if (this.state.count == 1) {
        //     return (
        //         <Amis />

        //     )
        // }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="1" className="p-0">
                        <Nav />
                    </Col>
                    <Col xs="2" className="p-0">
                        <Membre name = "Privés"/>
                    </Col>
                    <Col className="p-0" xs="8">
                        
                        <Friend />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;