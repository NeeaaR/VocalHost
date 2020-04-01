import React from 'react';
import { ModalBody, ModalFooter, Col, Row, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            plus: false
        }
    }
    ifPlus() {
        this.setState({
            plus: true
        })
    }
    elsePlus() {
        this.setState({
            plus: false
        })
    }
    clickPlus() {
        if (this.state.plus === true) {
            return (
                <div className="ifPlus">
                    <ul>
                        <li><a>...</a></li>
                        <li><a>...</a></li>
                        <li><a>...</a></li>
                    </ul>
                </div>
            )
        }
    }

    change() {
        if (this.state.count === 0) {
            return (
                <div className="blockFriend friendSearch">
                    <h4 className="titleFriend">AJOUTER UN AMI</h4>
                    <form>
                        <input type="text" placeholder="Entrez un utilisateur #0000"></input>
                        <input type="submit" value="Envoyer une demande"></input>
                    </form>

                </div>
            )

        }
        else if (this.state.count === 1) {
            return (
                <div className="blockFriend friendList">
                    <h4 className="titleFriend">MES AMIS</h4>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div onMouseLeave={() => this.elsePlus()} className="optionFriend">
                            <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a>
                            <a onMouseEnter={this.ifPlus.bind(this)}>
                                <img src={require("../assets/img/plus.jpg")} alt=""></img>
                            </a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div /*onMouseLeave = {() => this.elsePlus()}*/ className="optionFriend">
                            <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a>
                            <a onClick={this.ifPlus.bind(this)}><img src={require("../assets/img/plus.jpg")} alt=""></img></a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.count === 2) {
            return (
                <div className="blockFriend friendList">
                    <h4 className="titleFriend">EN ATTENTE</h4>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div onMouseLeave={() => this.elsePlus()} className="optionFriend">
                            <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a>
                            <a onMouseEnter={this.ifPlus.bind(this)}>
                                <img src={require("../assets/img/plus.jpg")} alt=""></img>
                            </a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div /*onMouseLeave = {() => this.elsePlus()}*/ className="optionFriend">
                            <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a>
                            <a onClick={this.ifPlus.bind(this)}><img src={require("../assets/img/plus.jpg")} alt=""></img></a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                </div>
            )

        }
        else if (this.state.count === 3) {
            return (
                <div className="blockFriend friendList">
                    <h4 className="titleFriend">BLOQUÉS</h4>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div onMouseLeave={() => this.elsePlus()} className="optionFriend">
                            {/* <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a> */}
                            <a onMouseEnter={this.ifPlus.bind(this)}>
                                <img src={require("../assets/img/plus.jpg")} alt=""></img>
                            </a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                    <div className="divFriendList">
                        <img className="profil"/*src={require("../assets/img/")}*/ alt=""></img>
                        <div>
                            <h5>Aaron</h5>
                            <p>Status</p>
                        </div>
                        <div /*onMouseLeave = {() => this.elsePlus()}*/ className="optionFriend">
                            {/* <a href="/"><img src={require("../assets/img/icMess.png")} alt=""></img></a> */}
                            <a onClick={this.ifPlus.bind(this)}><img src={require("../assets/img/plus.jpg")} alt=""></img></a>
                            <div>{this.clickPlus()}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    addFriend() {
        this.setState({
            count: 0
        })
    }
    listFriend() {
        this.setState({
            count: 1
        })
    }
    Waiting() {
        this.setState({
            count: 2
        })
    }
    block() {
        this.setState({
            count: 3
        })
    }

    render() {
        return (
            <div className="pt-4">

                <Row className="setFriend">
                    <Col className="friend" onClick={this.addFriend.bind(this)} active>Ajouter un ami</Col>
                    <Col className="friend" onClick={this.listFriend.bind(this)}>Mes amis</Col>
                    <Col className="friend" onClick={this.Waiting.bind(this)}>En attente</Col>
                    <Col className="friend" onClick={this.block.bind(this)}>Bloqué</Col>
                </Row>
                <Row className="ml-1">
                    {this.change()}
                </Row>
            </div>
        )
    }
}

export default Settings;