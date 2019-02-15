import React, {Component} from 'react';
import PropTypes from 'prop-types';
import storage from '../model/storage';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="username" ref="username"/>
                    <br/><br/>
                    <input type="password" name="password" ref="password"/>
                    <br/><br/>
                    <input type="submit" value="登陆"/>
                </form>
            </div>
        );
    }

    login = (e) => {
        e.preventDefault();
        if (this.refs.username.value === 'admin' && this.refs.password.value === '123456') {
            this.props.loginSuccess();
            storage.set('isLogin',true);
            return;
        }
        alert('login fail');
    }
}

Login.propTypes = {
    loginSuccess: PropTypes.func
};

export default Login;
