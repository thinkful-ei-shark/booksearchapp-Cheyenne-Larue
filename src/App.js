import React, { Component } from 'react';
import './App.css';
import BookSearch from './BookSearch';
import SearchFilter from './SearchFilter';
import BookResult from './BookResult'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <BookSearch />
        <SearchFilter />
        <BookResult />
      </div>
    );
  }
}

export default App;