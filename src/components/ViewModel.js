import React ,{Component} from 'react';

class ViewModel extends Component{

    constructor(props){
        super(props);

        this.state = {
            message:'111'
        }
    }

    // 利用事件获取值
    changeMessageByEvent=(e)=>{
        this.setState({message:e.target.value});
    };

    // 利用ref获取值
    changeMessageByRef=()=>{
        this.setState({message:this.refs.messageInput.value});
    };


    render(){
        return(
            <div>
                <h2>this is model-view</h2>

                <input type="text" value={this.state.message} onChange={this.changeMessageByEvent}/>
                <input ref="messageInput" type="text" value={this.state.message} onChange={this.changeMessageByRef}/>
                <br/>
                {this.state.message}
            </div>
        )
    }
}

export default ViewModel;
