import React,{Component} from 'react';
import Todos from './todos'
import Addtodo from './addtodo'
class App extends Component{
  state={
    list:[ {id:1,content:"see avengers endgame"},
      {id:2,content:"buy milk"}
    ]
  }
  adddata=(data)=>{
data.id=Math.random();
let list=this.state.list
list.push(data);
    console.log(list);
this.setState({
  list
})
console.log(this.state.list);
  }
  deletetodo=(id)=>{
console.log(id);
const list=this.state.list.filter(item=>{
  return item.id!==id;
})
this.setState({
list
  })  }
  // if the key and value have same name  then we only write the name of the key.
  render(){
    return(
      <div className="todo-app container" >
<h1 className="center blue-text"> TodoApp</h1>
<Todos todos={this.state.list} deletetodo={this.deletetodo}/>
<Addtodo adddata={this.adddata}/>
      </div>
    )
  }
}
export default App;
