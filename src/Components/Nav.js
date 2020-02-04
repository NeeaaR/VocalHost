import React from 'react'
import {NavLink, Row, Col} from 'reactstrap';

class Nav extends React.Component{
    render() {
        return (
        <div className="h-100">
                <Col className=" border-right pr-0 h-100" >
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}}>
                            <img src={require("../assets/img/icMess.png")} alt="icMess" style={{ width: 70 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}}>
                            <img src={require("../assets/img/icCall.png")} alt="icCall" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}}>
                            <img src={require("../assets/img/icGroup.png")} alt="icGroup" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}}>
                            <img src={require("../assets/img/icSet.png")} alt="icSet" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                </Col>
        </div>
        
    );
    }
}
export default Nav;