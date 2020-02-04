import React from 'react'
import {Form, FormGroup, Input} from 'reactstrap';

class Send extends React.Component{
    render() {
    
        return (
            <Form className="" >  

                <FormGroup>
                    <input className="file" type="file" name="file" id="" />
                    <Input  type="text" name="text" id="text" placeholder="Message..." />
                </FormGroup>
            </Form>      


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
