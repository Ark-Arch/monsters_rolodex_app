import React from 'react'


class SearchBox extends React.Component{

    render(){
        return(
            <input 
                className={this.props.className}
                placeholder = {this.props.placeholder}
                onChange = {this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox