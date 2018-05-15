import React from "react";
import axios from "axios";
import UserInput from "./UserInput";
import UserTweetsTable from "./UserTweetsTable";
import Header from "./Header";
import LoginForm from "./LoginForm";

//class for merging userInput and UserTweetsTableTogether
class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserChanged = this.handleUserChanged.bind(this);
        this.handleHashtagSearch = this.handleHashtagSearch.bind(this);
        this.handleFilterActive = this.handleFilterActive.bind(this);
        this.handleLoginActive = this.handleLoginActive.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            tweets: [],
            isOpenLogin: false,
            isOpenFilter: false,
            isOpenTable: true
        };
    }
    
    componentDidMount(){
        document.body.style.margin = "0px";
        document.body.style.padding = "0px";
        document.body.style.background = "linear-gradient(to top,lightgray,white)";
        document.body.style.height = "621px";
        
    }
    componentWillUnmount(){
       document.body.style.background = null;  
    }

    render(){
        
        return(
            <div>
                <Header onLoginActive={this.handleLoginActive} onFilterActive={this.handleFilterActive}/>
                <div className="wrapper">
                    <UserInput activeUserInput={this.state.isOpenFilter} onUserChanged={this.handleUserChanged} onHashtagSearch={this.handleHashtagSearch}/>
                    <LoginForm activeLoginForm={this.state.isOpenLogin} onUserDataSubmited={this.handleSubmit}/>
                    <UserTweetsTable activeUserTable={this.state.isOpenTable} tweets={this.state.tweets}/>
                </div>
            </div>
        )
    }
    //handling username changing and sending request to our api via axios
    handleUserChanged (userName){
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

    handleHashtagSearch (hashtag){
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

    handleLoginActive (){
        this.setState({isOpenLogin: true});
        this.setState({isOpenFilter: false});
        this.setState({isOpenTable: false});
        

    }

    handleFilterActive (){
        this.setState({isOpenLogin: false});
        this.setState({isOpenFilter: true});
        this.setState({isOpenTable: true});
    }

    handleSubmit(){
        this.setState({isOpenLogin: false});
        this.setState({isOpenFilter: true});
        this.setState({isOpenTable: true});

    }
}
export default App;