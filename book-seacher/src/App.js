import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchInput from "./components/SearchInput";
import Gallery from "./components/Gallery";

class App extends Component {
    constructor(props) {
        super(props);
        this.changeInput = this.changeInput.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            query: '',
            items: []
        }
    }
    search () {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${url}${this.state.query}`, {method: "GET"})
            .then(respons=>respons.json())
            .then(result=>{
                let {items} = result;
                this.setState({items});
                console.log(this.state.items);
            })
            .catch(error=>console.log(error));
    }
    changeInput (val) {
        this.setState({query: val});
    }
    keyPress (event) {
        if(event.key === 'Enter') this.search();
    }
  render() {
    return (
        <div className="bookSearcher">
          <h1 className="mb-4">Book Searcher</h1>
            <SearchInput
                change={this.changeInput}
                search={this.search}
                press={this.keyPress}
            />
            <Gallery items={this.state.items}/>
        </div>
    )
  }
}

export default App;
