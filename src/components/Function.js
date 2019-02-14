import React, {Component} from 'react';

class Function extends Component {
    constructor(props) {
        super(props);

        this.state = {

            person: {
                name: 'licky',
                sex: 'man'
            },

            list: [
                '111',
                '222',
                '333'
            ]
        }
    };

    getSex = () => {
        alert(this.state.person.sex);
    };

    changeSex() {
        let person = this.state.person;
        person.sex === 'man' ? person.sex = 'woman' : person.sex = 'man';
        this.setState({person: person});
    }

    render() {
        return (
            <div>
                <p>{this.state.person.name}'s sex is {this.state.person.sex}</p>
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>

                <hr/>
                <button onClick={this.getSex}>获取 sex</button>
                <button onClick={this.changeSex.bind(this)}>改变 sex</button>
            </div>
        )
    };
}

export default Function;
