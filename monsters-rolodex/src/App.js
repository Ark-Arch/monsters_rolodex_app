// create a react component using a class rather than a function.
import React from 'react'
import './App.css'

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            monsters:[],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => {return(
                this.setState(
                    () => {
                        return(
                            {monsters:users}
                        )
                    }
                )
            )})
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase()
        return (
            this.setState(
                () => {
                    return(
                        {searchField}
                    )
                }
            )
        )
    }

    render(){

        /* DESTRUCTURING */
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
        return(
            <div className='App'>
                <input className='search-box' type='search' placeholder='search rolodex' onChange={onSearchChange}/>

                {
                    filteredMonsters.map(monster => <div key={monster.id}><h1>{monster.name}</h1></div>)
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