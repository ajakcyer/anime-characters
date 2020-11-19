import React, { Component } from 'react'


class Form extends Component {

    state = {
        name: "",
        show: "",
        img: ""
    }

    localOnSubmit = (e) =>{
        e.preventDefault()
        //send input values in an object back to app
        let newCharacter = {
            name: this.state.name,
            img: this.state.img,
            show: this.state.show
        }
        this.setState({
            name: "",
            show: "",
            img: ""
        })
        //need function to send back from APP
        this.props.appSubmit(newCharacter)
    }

    nameChangeHandler = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    showChangeHandler = (e) =>{
        this.setState({
            show: e.target.value
        })
    }

    imgChangeHandler = (e) =>{
        this.setState({
            img: e.target.value
        })
    }


    render(){
        return (
            <div className="form">
                <h1>New Character</h1>
                <form onSubmit={this.localOnSubmit}>
                    <input onChange={this.nameChangeHandler}type="text" name="name" placeholder="enter name here" value={this.state.name}/>
                    <input onChange={this.showChangeHandler} type="text" name="show" placeholder="enter show name here" value={this.state.show}/>
                    <input onChange={this.imgChangeHandler} type="text" name="image" placeholder="enter image url here" value={this.state.img}/>
                    <input type="submit" value="Add Character"/>
                </form>
            </div>
        )
    }
}

export default Form