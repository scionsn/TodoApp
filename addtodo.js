// smart component
import React,{Component} from 'react';
class Addtodo extends Component
{
state={
content:""
}
handlechange=(event)=>{
this.setState({
    content: event.target.value
})
}
handlesubmit=(event)=>{
event.preventDefault();
    // console.log(this.state)
this.props.adddata(this.state);
}
render(){
    return(
        <div>
            <form onSubmit={this.handlesubmit}>
                <label><strong>Addtodo:</strong></label>
                <input type="text" onChange={this.handlechange}></input>
            </form>
        </div>
    )
}
}
export default Addtodo;
