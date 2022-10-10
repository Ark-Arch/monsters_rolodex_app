// create a react component using a class rather than a function.
import React from 'react';
import './App.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters:[]
        }
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => 
                this.setState(
                    ()=>{
                        return {monsters:users}
                    },
                    () => {/**/}
                )
                )
    };

    render(){
        console.log('render method')
        return(
            <div className='App'>
                <input className='search-box' type='search' placeholder='search rolodex' onChange={(event)=>{
                    this.setState(
                        (state,props) => {
                            const filteredMonsters = state.monsters.filter((monster) => monster.name.toLowerCase().includes(event.target.value))
                            return {monsters:filteredMonsters}
                        },
                        () => {
                        }
                    )
                }}/>

                {
                    this.state.monsters.map(monster => {
                        return(
                            <div key={monster.id}>
                                <h1>{monster.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default App


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
//