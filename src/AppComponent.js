import React from "react";
import axios from "axios";
import UserInputComponent from "./UserInputComponent";
import UserTweetsTable from "./UserTweetsTable";

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserChanged = this.handleUserChanged.bind(this);
        this.state = {
            tweets: []
        };
    }
    componentWillMount(){
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.background = "linear-gradient(to top,lightgray,white)";
        document.body.style.height = "625px";
    }
    componentWillUnmount(){
       document.body.style.background = null;  
    }

    render(){
        return(
            <div className="wrapper">
                <UserInputComponent onUserChanged={this.handleUserChanged}/>
                <UserTweetsTable tweets={this.state.tweets}/>
            </div>
        )
    }

    handleUserChanged(userName) {
        console.log(userName);
        axios.get(`http://localhost:4006/user/${userName}/tweets`)
            .then((response) => {
                this.setState({tweets:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default AppComponent;