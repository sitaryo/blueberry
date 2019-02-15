import React, {Component} from 'react';
import Son from "./Son";

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fatherName: 'father',
            fatherAge: 45
        }
    }

    getFatherName = () => {
        return this.state.fatherName;
    };

    getFatherAge = () => {
        return this.state.fatherAge;
    };

    setFatherName = (name) => {
        this.setState({name: name});
    };

    setFatherAge = (age) => {
        this.setState({age: age});
    };

    showSonName = () => {
        this.refs.sonName.innerHTML =this.refs.son.getSonName();
    };

    render() {
        return (
            <div>
                <h3>this is father</h3>

                {/*父组件获取子组件信息*/}
                <button onClick={this.showSonName}>get son's name</button>
                <br/>
                here is son's name : <label ref="sonName"></label>

                <br/>
                <hr/>

                <Son fatherName={this.state.fatherName} father={this} ref="son"/>
            </div>
        );
    }
}

Father.propTypes = {};

export default Father;
