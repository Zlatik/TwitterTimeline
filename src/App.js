import React from "react";
import axios from "axios";
import UserInput from "./UserInput";
import UserTweetsTable from "./UserTweetsTable";

//class for merging userInput and UserTweetsTableTogether
class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserChanged = this.handleUserChanged.bind(this);
        this.handleHashtagSearch = this.handleHashtagSearch.bind(this);
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
                <UserInput onUserChanged={this.handleUserChanged} onHashtagSearch={this.handleHashtagSearch}/>
                <UserTweetsTable tweets={this.state.tweets}/>
            </div>
        )
    }
    //handling username changing and sending request to our api via axios
    handleUserChanged(userName) {
        console.log(userName);


        axios.get(`/user/${userName}/tweets`,{headers: {

            'Access-Control-Allow-Origin': '*',
          }})
            .then((response) => {
                this.setState({tweets:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleHashtagSearch(hashtag) {
        console.log(hashtag);


        axios.get(`/hashtag/${hashtag}/tweets`,{headers: {

            'Access-Control-Allow-Origin': '*',
          }})
            .then((response) => {
                this.setState({tweets:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default App;