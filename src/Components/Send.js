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
                <div key={item}>
                    {item}
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                <div className="container2"> 
                       
                       <MessageBox
                       position={'left'}
                       type={'text'}
                       text={this.renderTodos()}
                       data={{
                           uri: 'https://.github.io/react/img/logo.svg',
                           status: {
                               click: false,
                               loading: 0,
                           }
                       }} />
                    
                    

                </div>
                <div className="send">

                    <Form>

                        <FormGroup className="sendChild">
                            <Input
                                className="file"
                                type="file"
                                name="file"
                            />
                            <Input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Message..."
                                value={this.state.userInput}
                                onChange={this.onChange.bind(this)}
                            />

                            <input
                                className="env"
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




