import React from "react";
import axios from "axios";
import UserInput from "./UserInput";
import UserTweetsTable from "./UserTweetsTable";
//class for merging userInput and UserTweetsTableTogether
class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserChanged = this.handleUserChanged.bind(this);
        this.state = {
            tweets: []
        };
    }
    
    componentDidMount(){
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
                <UserInput onUserChanged={this.handleUserChanged}/>
                <UserTweetsTable tweets={this.state.tweets}/>
            </div>
        )
    }
    //handling username changing and sending request to our api via axios
    handleUserChanged(userName) {
        console.log(userName);
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PATCH, DELETE, POST, GET, OPTIONS';
        axios.get(`http://localhost:4006/user/${userName}/tweets`)
            .then((response) => {
                this.setState({tweets:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default App;