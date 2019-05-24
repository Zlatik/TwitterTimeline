import React from "react";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/lib/Navbar";
import Container from "reactstrap/lib/Container";
import Image  from "react-bootstrap/lib/Image";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import NavbarBrand from "react-bootstrap/lib/NavbarBrand";




class Header extends React.Component{
     
    constructor(props){
        super(props);
    //    this.pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        //this.activateLoginForm = this.activateLoginForm.bind(this);
        this.activateFilterForm = this.activateFilterForm.bind(this);
        this.activateMessageBox = this.activateMessageBox.bind(this);
        //this.loginAction = this.loginAction.bind(this);
        const cookies = new Cookies();
        this.userPhotoUrl = cookies.get('userPhoto').value;
    }


    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" height="5%">
            
                 <NavbarBrand href="#home" className = "col-sm-2">React-Bootstrap</NavbarBrand>
                 <ButtonGroup className="col-sm-6" aria-label="First group">
                    <Button variant="primary" onClick={this.activateMessageBox}>Message</Button>
                    <Button variant="primary" onClick={this.activateFilterForm}>Seach</Button>
                 </ButtonGroup>
                    <Image src={this.userPhotoUrl} thumbnail className = "col-sm-1"/>                    
            </Navbar>
        )
    }

    activateFilterForm(){
        this.props.onFilterActive();
    }


    activateMessageBox(){
        this.props.onMessageActive();
    }
}

export default Header;