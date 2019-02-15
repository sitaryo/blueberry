import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "./assert/css/index.css";
import Login from "./components/Login";
import storage from "./model/storage";
import routes from "./model/route";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    loginSuccess = () => {
        this.setState({isLogin: true});
        storage.set('isLogin',true);
    };

    logout = () => {
        this.setState({isLogin:false});
        storage.set('isLogin',false);
    };


    componentDidMount() {
        let isLogin = storage.get('isLogin');
        if (isLogin) {
            this.setState({isLogin: isLogin});
        }
    }


    render() {

        // 是否已登陆
        if (!this.state.isLogin) {
            // 未登录 渲染登录页面
            return <Login loginSuccess={this.loginSuccess}/>;
        }

        // 登陆后渲染页面
        return (
            <Router>
                <div>
                    <header className="header">
                        <Link to="/">Home</Link>
                        <Link to="/father">Father-Son</Link>
                        <Link to="/news">News</Link>
                        <Link to="/todoList">TodoList</Link>
                        <Link to="/admin">Admin</Link>
                        <button className="logout-btn" onClick={this.logout}>logout</button>
                    </header>

                    <div>
                        {
                            routes.map((value, index) => {

                                if (value.exact) {
                                    return <Route key={index}
                                                  exact
                                                  path={value.path}
                                                  render={props => (
                                                      // 将 props routes 传入对应组件中
                                                      <value.component {...props} routes={value.routes} id={{id: 12}}/>
                                                  )}/>;
                                }

                                return <Route key={index}
                                              path={value.path}
                                              render={props => (
                                                  <value.component {...props} routes={value.routes}/>
                                              )}/>;
                            })
                        }
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
