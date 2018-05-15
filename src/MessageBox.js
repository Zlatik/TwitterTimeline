import React from "react";
import styles from "./styles/FormStyle"

class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {message:""};
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        if(!this.props.activateMessageBox){
            return null;
        }
        return(
            <form style={styles.formStyle}>
                <textarea 
                style={styles.textAreaStyle} 
                placeholder="enter smtn here" 
                value={this.state.message}
                onChange={this.handleChange}></textarea>
                <button style={styles.messageButton} onClick={this.sendData}>Send</button>
            </form>
        )
    }

    sendData(){
        
        this.props.onSendData(this.state.message);
    }
    handleChange(e){
        this.setState({message:e.target.value});
    }


}

export default MessageBox;