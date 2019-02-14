import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                {content: '代办1', done: false},
                {content: '代办2', done: false},
                {content: '代办3', done: false},
                {content: '代办4', done: false},
            ]
        }
    }

    render() {
        return (
            <div>
                {/*header*/}
                <div style={{paddingTop: 50, background: 'black'}}>
                    <label style={{color: 'white', fontSize: 24}}>TODO LIST</label>
                    <input type="text" value={this.state.content} onKeyUp={this.addTodoList}/>
                </div>
                {/*content*/}
                <div>
                    <h2>未完成</h2>
                    {
                        // 未完成
                        this.state.todoList
                            .map((value, index) => {
                                if(value.done){
                                    return;
                                }
                                return (
                                    <div key={index}>
                                        <input type="checkbox" checked={value.done} id={"todoItem" + index}
                                               onChange={this.setTotoItemStatus.bind(this, index)}/>
                                        <label htmlFor={"todoItem" + index}>{value.content}</label>
                                        <button onClick={this.removeTodoItem.bind(this, index)}>删除</button>
                                    </div>
                                )
                            })
                    }

                    <br/>
                    <br/>

                    <h2>已完成</h2>
                    {
                        // 已完成
                        this.state.todoList
                            .map((value, index) => {
                                if(!value.done){
                                    return;
                                }
                                return (
                                    <div key={index}>
                                        <input type="checkbox" checked={value.done} id={"doneItem" + index}
                                               onChange={this.setTotoItemStatus.bind(this, index)}/>
                                        <label htmlFor={"doneItem" + index}>{value.content}</label>
                                        <button onClick={this.removeTodoItem.bind(this, index)}>删除</button>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        );
    }

    addTodoList = (e) => {
        let inputValue = e.target.value;
        if (e.keyCode !== 13 || !inputValue) {
            return;
        }

        let todoList = this.state.todoList;
        todoList.push({content: inputValue, done: false});
        this.setState({todoList:todoList});
        // input 复位
        e.target.value = '';
    };

    removeTodoItem = (index2remove) => {
        let todoList = this.state.todoList;
        todoList = todoList.filter((value, index) => index !== index2remove);
        console.log(todoList);
        this.setState({todoList:todoList});
    };

    setTotoItemStatus = (value) => {
        let todoList = this.state.todoList;
        todoList[value].done = !todoList[value].done;
        this.setState({todoList: todoList});
    };

}

export default TodoList;
