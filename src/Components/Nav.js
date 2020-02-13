import React from 'react'
import {NavLink, Row, Col} from 'reactstrap';

class Nav extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                message: 'Vocalhost'
                
            }
      }
     
    message(){
        this.setState({
          message: this.state.message = 'Messages'
        })
       
     }
    appel(){
        this.setState({
          message: this.state.message = 'Appels'
        })
       
    }
    groupe(){
        this.setState({
          message: this.state.message = 'Salons'
        })
       
    }

    set(){
          this.setState({
            message: this.state.message = 'Paramètres'
          })
         
      }
      
    Cinfo(){
        this.setState({
          message: this.state.message = 'Vocalhost'
        })
       
    }

    render() {
        return (
        <div className="h-100">
                <Col className=" border-right pr-0 h-100" >
                <div className="text-center pt-3">{this.state.message}</div>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}} onMouseEnter = {() => this.message() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icMess.png")} alt="icMess" style={{ width: 70 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}} onMouseEnter = {() => this.appel() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icCall.png")} alt="icCall" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}} onMouseEnter = {() => this.groupe() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icGroup.png")} alt="icGroup" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}} onMouseEnter = {() => this.set() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icSet.png")} alt="icSet" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                </Col>
        </div>
        
    );
    }
}
export default Nav;