import React from 'react'


class CardList extends React.Component{

    
    render(){

        const {monsters} = this.props
        console.log('render from CardList')
        return(
            <div className='card-list'>
                {
                    monsters.map(monster => {
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

export default CardList