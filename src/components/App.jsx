import React, { Component } from 'react';
import SearchForm from './SearchForm'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'masuda',
        }
    }

    handleMouseOut(){
        this.setState({name: 'とくみん'});
    }
    handleMouseOver(){
        this.setState({name: 'まっすー'});
    }

    handleNameChange(name){
        this.setState({name: name})
    }

    handlePlaceSubmit(place){
        console.log(place)
    }

    render(){
        return(
            <div>
                <h1>緯度検索</h1>
                <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
            </div>
        );
    }

}
export default App;