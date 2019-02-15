import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

class Admin extends Component {
    render() {
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
                        {
                            this.props.routes.map((value, index) => {

                                if (value.exact) {
                                    return <Route key={index}
                                                  exact
                                                  path={`${this.props.match.path}${value.path}`}
                                                  render={props => (
                                                      // 将 props routes 传入对应组件中
                                                      <value.component {...props} routes={value.routes}/>
                                                  )}/>;
                                }

                                return <Route key={index}
                                              path={`${this.props.match.path}${value.path}`}
                                              render={props => (
                                                  <value.component {...props} routes={value.routes}/>
                                              )}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Admin.propTypes = {};

export default Admin;
