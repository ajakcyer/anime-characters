import React, { Component } from 'react'

class Search extends Component {

    state = {
        search: ""
    }

    searchHandler = (e) =>{
        this.setState({
            search: e.target.value
        })

        //send this state value to app
        this.props.appSearch(e.target.value)
    }

    render(){
        return (
            <div className="search">
                <p>Find a Character:</p>
                <input onChange={this.searchHandler}type="text" placeholder="search by name" value={this.state.search}/>
            </div>
        )
    }
}

export default Search