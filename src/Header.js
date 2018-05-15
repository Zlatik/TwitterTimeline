import React from "react";
import styles from "./styles/HeaderStyle"


class Header extends React.Component{
    constructor(props){
        super(props);
        this.activateLoginForm = this.activateLoginForm.bind(this);
        this.activateFilterForm = this.activateFilterForm.bind(this);
        this.activateMessageBox = this.activateMessageBox.bind(this);
        
        
    }


    render(){
        return(
            <header style={styles.headerStyle}>
                <nav>
                    <ul style={styles.listStyle}>
                        <li style={styles.liStyle}><a onClick={this.activateMessageBox}>Message</a></li>
                        <li style={styles.liStyle}><a onClick={this.activateLoginForm}>Login</a></li>
                        <li style={styles.liStyle}><a onClick={this.activateFilterForm}>Filter</a></li>
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