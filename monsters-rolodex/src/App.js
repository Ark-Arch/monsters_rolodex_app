// create a react component using a class rather than a function.
import React from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
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

    onSearchChange = (event) => {         // this is basically some sort of an handler
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
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App
