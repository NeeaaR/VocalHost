import React from 'react'
import {NavLink, Row, Col, Modal, ModalHeader} from 'reactstrap';
import Settings from './Settings/Settings';
import '../assets/css/Settings.css'

class Nav extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                message: 'Vocalhost',
                modalisOpen: false
            }
      }

    toggleModal(){
        this.setState({
            modalisOpen: !this.state.modalisOpen
        })
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
        <div className="nav">
                <Col className=" border-right pr-0 h-100" >
                <div className="text-center pt-3">{this.state.message}</div>
                <hr/>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="/" style={{color: 'black'}} onMouseEnter = {() => this.message() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icMess.png")} alt="icMess" style={{ width: 70 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="/Call" style={{color: 'black'}} onMouseEnter = {() => this.appel() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icCall.png")} alt="icCall" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="/Salon" style={{color: 'black'}} onMouseEnter = {() => this.groupe() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icGroup.png")} alt="icGroup" style={{ width: 60 }}></img>
                        </NavLink>
                    </Row>
                    <Row className="pt-5 pb-5 mx-auto" xs="10">
                        <NavLink href="#" style={{color: 'black'}} onClick={this.toggleModal.bind(this)} onMouseEnter = {() => this.set() } onMouseLeave = {() => this.Cinfo()}>
                            <img src={require("../assets/img/icSet.png")} alt="icSet" style={{ width: 60 }}></img>
                        </NavLink>
                        <Modal className="modal-dialog" size="xl" isOpen={this.state.modalisOpen}>
                            <ModalHeader toggle={this.toggleModal.bind(this)}>Paramètres</ModalHeader>
                            <Settings></Settings>
                        </Modal>
                    </Row>  
                </Col>
        </div>
        
    );
    }
}

export default Nav;
