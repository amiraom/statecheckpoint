import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Person from './Person';
import Test from './Test';

class App extends Component {
 


state = {

  fullName:"Lina",
  bio:"text bio",
  imgSrc:"https://www.pngitem.com/pimgs/m/243-2432074_person-clipart-png-download-presenter-clipart-transparent-png.png",
  profession:"profession",
  show:false

  }

toggleDiv = () => {

  const { show } = this.state;
  this.setState( { show : !show } )

}
// componentDidMount() {
//   this.timerID = setInterval(
//     () => this.tick(),
//     1000
//   );
// }
// tick() {
//   this.setState({
//     date: new Date()
//   });
// }
  render () {
  return (
    <div className="App">
       
       <button onClick={ this.toggleDiv }>Show person</button>
       { this.state.show && <Person person={this.state}/> }
     
     {this.state.show  && <Test/>}
    </div>
  );
}

}

export default App;
