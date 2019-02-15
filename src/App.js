import React, {Component} from 'react';
import Father from "./components/Father-Son/Father";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import './assert/css/index.css'
import TodoList from "./components/TodoList";
import NewsContent from "./components/NewsContent";
import Login from "./components/Login";
import stroage from "./model/storage";
import Admin from "./components/Admin";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    loginSuccess=()=>{
      this.setState({isLogin:true});
    };


    componentDidMount() {
        let isLogin = stroage.get('isLogin');
        if(isLogin){
            this.setState({isLogin:isLogin});
        }
    }


    render() {

        // 是否已登陆
        if(!this.state.isLogin){
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
                        <Link to="/admin">TodoList</Link>
                    </header>

                    <div>
                        {/*exact 严格模式 如果不用严格模式 /home 会 匹配 /home 和 / */}
                        <Route exact path="/" component={Home}/>
                        <Route path="/news" component={News}/>
                        <Route path="/content" component={NewsContent}/>
                        <Route path="/father" component={Father}/>
                        <Route path="/todoList" component={TodoList}/>
                        <Route path="/admin" component={Admin}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
