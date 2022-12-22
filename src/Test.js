import React, { Component } from 'react'
export default class Test extends Component {

constructor()
{
    super();
this.state={
    interval:0,
    timer:0
}
}
componentDidMount()
{

this.setState(
{interval:setInterval(()=> {

this.setState({timer:this.state.timer +1})

},1000)}

)
}
    render() {
    return (
      <div>Inetrval : {this.state.timer}</div>
    )
  }

}
