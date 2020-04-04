import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchInput from "./components/SearchInput";

class App extends Component {
  render() {
    return (
        <div className="bookSearcher">
          <h1 className="mb-4">Book Searcher</h1>
            <SearchInput />
        </div>
    )
  }
}

export default App;
