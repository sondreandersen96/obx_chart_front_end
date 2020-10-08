import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import SearchBar from './components/layout/search_bar.js';




class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>
        <div style={searchBarStyle}>
          <SearchBar/>
        </div>
        
      </div>
    );
  
  }

  
}



const searchBarStyle = {
  marginTop: '20px',
}













export default App;
