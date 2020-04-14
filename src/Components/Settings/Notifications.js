import React from 'react';
import { Button, Input, CustomInput, Label, FormGroup } from 'reactstrap';

class Notifications extends React.Component{
    render(){
        return(
            <div>
                <h5 className="text-center">PREFERENCES</h5>
                <FormGroup>
                <Label>Taille de la police</Label>
                <CustomInput type="select" name="PoliceSize">
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                </CustomInput>
                </FormGroup>
                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Afficher les images" />
                <hr/>
                <FormGroup>
                <Label>Thèmes :</Label>
                <CustomInput type="select" name="PoliceSize">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Night Blue</option>
                </CustomInput>
                </FormGroup>
                <br/>
            </div>
        )
    }
}

export default Notifications