import React from "react";
import styles from "./styles/HeaderStyle"
import Cookies from "react-cookies";


class Header extends React.Component{
    constructor(props){
        super(props);
        this.activateLoginForm = this.activateLoginForm.bind(this);
        this.activateFilterForm = this.activateFilterForm.bind(this);
        this.activateMessageBox = this.activateMessageBox.bind(this);
        this.userPhoto = Cookies.load("userPhoto");
    }


    render(){
        return(
            <header style={styles.headerStyle}>
                <nav>
                    <ul style={styles.listStyle}>
                        <li style={styles.liStyle}><a onClick={this.activateMessageBox}>Message</a></li>
                        {/* <li style={styles.liStyle}><a onClick={this.activateLoginForm}>Login</a></li> */}
                        <li style={styles.liStyle}><a onClick={this.activateFilterForm}>Filter</a></li>
                        <li style={styles.liStyle} ><img src={this.userPhoto} style = {styles.photoStyle}></img></li>
                    </ul>
                </nav>
            </header>
        )
    }

    activateFilterForm(){
        this.props.onFilterActive();
    }

    activateLoginForm(){
        this.props.onLoginActive();
    }

    activateMessageBox(){
        this.props.onMessageActive();
    }


    
}

export default Header;