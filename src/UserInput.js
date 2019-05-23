import React from "react";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import styles from "./styles/UserInputStyle";

//Form component with username input and submit button
class UserInput extends React.Component{
    
    constructor(props) {
        super(props);
        this.changeUser = this.changeUser.bind(this);
        this.searchByHashtag = this.searchByHashtag.bind(this);
        
        this.state = { username: "",hashtag:"" }
    }

    render(){
        if(!this.props.activeUserInput){
            return null;
        }
        return(
            <form style = {styles.FormStyle}>
                <FormGroup >
                    <FormControl 
                        style = {styles.InputStyle}
                        inputRef={input => this.textInput = input} 
                        type="text"
                        name="userInput"/> 
                    <Button style = {styles.ButtonStyle} onClick={this.changeUser}>Find Tweets</Button>
                    <FormControl 
                        style = {styles.InputStyle}
                        inputRef={hash => this.HashInput = hash} 
                        type="text"
                        name="hashtag"/> 
                    <Button style = {styles.ButtonStyle} onClick={this.searchByHashtag}>Find hashtag</Button>
                </FormGroup>
            </form>    
        )
    }
    //handler for changing username value
    changeUser() {
       this.setState({username: this.textInput.value});
       this.props.onUserChanged(this.textInput.value);
    }
    searchByHashtag(){
        this.setState({hashtag: this.HashInput.value});
        this.props.onHashtagSearch(this.HashInput.value);
    }
}

export default UserInput;