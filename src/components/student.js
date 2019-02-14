    import React, {Component} from 'react';

class Student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'licky',
            sex: 'man',
            age: 23
        }
    }

    render() {
        return (
            <div>
                i'm a student
                <p>my name is {this.state.name}</p>
                <p>my sex is {this.state.sex}</p>
                <p>my age is {this.state.age}</p>
            </div>
        );
    }
}

export default Student;
