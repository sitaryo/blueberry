import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Son extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sonName: 'son',
            sonAge: 18
        }

    }

    render() {
        return (
            <div>
                <h3>this is son </h3>
                {/*子组件获取父组件传值*/}
                <button onClick={this.showMyFather}>show my father!</button>
                <br/>
                here is my father's msg : <label ref="fatherMsg"/>
            </div>
        );
    }


    getSonName = () => {
        return this.state.sonName;
    };

    getSonAge = () => {
        return this.state.sonAge;
    };

    setSonName = (name) => {
        this.setState({sonName: name});
    };

    setSonAge = (age) => {
        this.setState({sonAge: age});
    };

    showMyFather = () => {
        this.refs.fatherMsg.innerHTML = JSON.stringify(this.props.father.state);
    };
}

Son.propTypes = {
    father:PropTypes.object,
    fatherName:PropTypes.string
};

export default Son;
