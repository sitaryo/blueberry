import React, {Component} from 'react';
import AdminList from "./Home/AdminList";
import {Link, Route} from "react-router-dom";
import AdminInfo from "./Home/AdminInfo";

class Admin extends Component {
    render() {
        console.log(this.props.match);
        return (
            <div>
                <div className="home-content">
                    <div className="left">
                        <ul>
                            <li><Link to={`${this.props.match.path}/`}>Admin</Link></li>
                            <li><Link to={`${this.props.match.path}/adminList`}>AdminList</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <Route exact path={`${this.props.match.path}/`} component={AdminInfo}/>
                        <Route path={`${this.props.match.path}/adminList`} component={AdminList}/>
                    </div>
                </div>
            </div>
        );
    }
}

Admin.propTypes = {};

export default Admin;
