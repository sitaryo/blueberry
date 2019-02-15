import React, {Component} from 'react';
import Father from "./components/Father";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import './assert/css/index.css'
import TodoList from "./components/TodoList";

class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <div>
                    <header className="header">
                        <Link to="/">Home</Link>
                        <Link to="/father">Father-Son</Link>
                        <Link to="/news">News</Link>
                        <Link to="/todoList">TodoList</Link>
                    </header>

                    <div>
                        {/*exact 严格模式 如果不用严格模式 /home 会 匹配 /home 和 / */}
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/father" component={Father}/>
                        <Route exact path="/todoList" component={TodoList}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
