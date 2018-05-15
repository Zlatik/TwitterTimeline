import React from "react";
import styles from "./styles/FormStyle";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.submitUserData = this.submitUserData.bind(this);
        this.state = {
            Username :"",
            Password : ""
        }
    }

    render(){
        if(!this.props.activeLoginForm){
            return null;
        }
        return(
            <form style={styles.formStyle}>
                <label style={styles.labelStyle}>Username</label>
                <input type="text" name="LoginInput" style={styles.inputStyle}></input>
                <label style={styles.labelStyle}>Password</label>
                <input type="password" name="PasswordInput" style={styles.inputStyle}></input>
                <button onClick={this.submitUserData} style={styles.buttonStyle}>Submit</button>
            </form>
        )
    }

    submitUserData(){
        this.setState({Username:"smbd",Password:"smtn"});
        this.props.onUserDataSubmited();
    }
}

export default LoginForm;