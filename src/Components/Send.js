import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import { MessageBox } from 'react-chat-elements';
import { MessageList } from 'react-chat-elements';

class Send extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="container2">

                    <MessageBox
                        position={'right'}
                        type={'text'}
                        text={item}
                        data={{
                            uri: 'https://.github.io/react/img/logo.svg',
                            status: {
                                click: false,
                                loading: 0,
                            }
                        }} />
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                {this.renderTodos()}
                <div className="send">

                    <Form>

                        <FormGroup className="sendChild">
                            <div className="contFile">
                                <label for="file"><img src={require("../assets/img/paperclip.png")} style={{ width: 25 }}></img></label>
                                <input
                                    className="file"
                                    type="file"
                                    name="file"
                                    id="file"
                                />
                            </div>

                            <Input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Message..."
                                value={this.state.userInput}
                                onChange={this.onChange.bind(this)}
                            />

                            <input
                                className="submit"
                                type="submit"
                                onClick={this.addTodo.bind(this)}
                            />

                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Send;




