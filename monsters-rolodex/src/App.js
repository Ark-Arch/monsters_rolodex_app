import { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => console.log(json)) 
          .catch(rejectedValue => console.log('I failed to fetch'))
    }

  render(){
      return (
        <div className="App">
          {
            this.state.monsters.map((monster)=>{
              return <h1 key={monster.name}>{monster.name}</h1>
            })
          }
        </div>
      );
    }
  }
    

export default App;






// render(){
    //   return (
    //     <div>
    //       <h1>Hi! My name is {this.state.name.firstName} {this.state.name.lastName}</h1>
    //       <p>...and I work at {this.state.company}</p>
    //       <button 
    //         onClick={()=>{
    //           this.setState(
    //             (state,props) => {
    //               return {name:{firstName:'Femi'},
    //                     company:'FaceBook'}
    //             },
    //             () => {
    //               //call a secondary callBack() function.
    //             }
    //           )  
    //       }
    //       }>
    //         Change Me Once
    //         </button>
    //     </div>
    //   )
    // }
