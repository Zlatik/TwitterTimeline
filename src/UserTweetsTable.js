import React from "react";
import {Table} from "react-bootstrap";
import moment from "moment";
import TweetsStyle from "./styles/UserTweetsStyle";
class UserTweetsTable extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const tweetItems = this.props.tweets;
        if(!this.props.activeUserTable){
            return null;
        }

        return(
            <div style={TweetsStyle.TableWrapperStyle}>
                <Table style={TweetsStyle.TableStyle}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Tweet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tweetItems.map(function(tweet){
                            return(<tr key={tweet.id}><td style={TweetsStyle.CellStyle}>{moment(tweet.created_at).format('L')}</td><td>{tweet.text}</td></tr>)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
    
}
export default UserTweetsTable;