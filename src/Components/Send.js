import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';

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
            userInput:'',
            items: [...this.state.items, this.state.userInput]
        });
    }

    render() {

        return (
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



        );
    }
}

export default Send;



/* <Row className="pt-3 pl-3">
                        <Col sm="12" md={{ size: 3, offset:5}}>
                        { <FormGroup>
                            <a><Input type="file" name="file" id="exampleFile"/></a>
                        </FormGroup> }
                        </Col>
                    </Row>
                    <Row className="pt-1">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>

                    </Col>
                    <Col>

                    </Col>
                    </Row> */
