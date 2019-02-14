import React, {Component} from 'react';

class FormDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            sex: '1',
            city: '',
            cities: ['广州', '武汉', '长沙'],
            hobby: [
                {name: 'playing game', like: false},
                {name: 'sleeping', like: false},
                {name: 'working', like: false}
            ],
            memo: ''
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="input-name">name: </label><input type="text" id="input-name" value={this.state.name}
                                                                     onChange={this.handleName}/>
                    <br/>

                    sex :
                    <input type="radio" name="sex" id="sex-man" value="1" checked={this.state.sex === '1'}
                           onChange={this.handleSex}/>
                    <label htmlFor="sex-man">男</label>

                    <input type="radio" name="sex" value="2" id="sex-woman" checked={this.state.sex === '2'}
                           onChange={this.handleSex}/>
                    <label htmlFor="sex-woman">女</label>
                    <br/>

                    城市 :
                    <select name="city" id="input-city" onChange={this.handleCity}>
                        <option value=''>请选择</option>
                        {
                            this.state.cities.map((value, index) => {
                                return <option value={this.state.value} key={index}>{value}</option>
                            })
                        }
                    </select>
                    <br/>

                    爱好 :
                    {
                        this.state.hobby.map((value, index) => {
                            return (
                                <span key={index}>
                                    <input type="checkbox" value={value.name}
                                           name="input-hobby"
                                           checked={value.like}
                                           onChange={this.handleHobby.bind(this,index)}/>
                                    {value.name}
                                </span>
                            )
                        })
                    }
                    <br/>

                    <label htmlFor="input-memo">备注 :</label>
                    <textarea name="memo" id="input-memo" cols="30" rows="10" value={this.state.memo} onChange={this.handleMemo}/>
                    <br/>
                    
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    handleName = (e) => {
        this.setState({name: e.target.value});
    };

    handleSex = (e) => {
        this.setState({sex: e.target.value});
    };

    handleCity = (e) => {
        this.setState({city: e.target.value});
    };

    handleHobby= (index)=> {
        let hobby = this.state.hobby;
        hobby[index].like = !hobby[index].like;

        this.setState({hobby:hobby});
    };

    handleMemo=(e)=> {
        this.setState({memo:e.target.value});
    }
}

export default FormDemo;
