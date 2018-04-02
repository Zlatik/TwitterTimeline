import React from "react";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {ControlLabel} from "react-bootstrap";
import {Button} from "react-bootstrap";
import styles from "./UserInputStyle";
class UserInputComponent extends React.Component{
    
    constructor(props) {
        super(props);
        this.changeUser = this.changeUser.bind(this);
        this.state = { username: "" }
    }

    render(){
        return(
            <form style = {styles.FormStyle}>
                <FormGroup >
                    <FormControl 
                        style = {styles.InputStyle}
                        inputRef={input => this.textInput = input} 
                        type="text"
                        name="userInput"/> 
                    <Button style = {styles.ButtonStyle} onClick={this.changeUser}>Find Tweets</Button>
                </FormGroup>
            </form>    
        )
    }

    changeUser() {
       this.setState({username: this.textInput.value});
       this.props.onUserChanged(this.textInput.value);
    }
}

export default UserInputComponent;