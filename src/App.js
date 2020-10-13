import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import SearchBar from './components/layout/search_bar.js';




class App extends React.Component {

  state = {
    tickers: [
      {
        id: 1,
        title: 'NEL',
      },
      {
        id: 2,
        title: 'HYDRO',
      },
      {
        id: 3,
        title: 'TEL',
      },
      {
        id: 4,
        title: 'EQNR',
      },
      {
        id: 5,
        title: 'SALM',
      },
      {
        id: 6,
        title: 'BAKKA',
      },
      {
        id: 7,
        title: 'MOWI',
      },
      {
        id: 8,
        title: 'GOGL',
      },
      {
        id: 9,
        title: 'YAHOO',
      },
      {
        id: 10,
        title: 'TECH',
      },
      {
        id: 11,
        title: 'SUPER',
      },
      {
        id: 12,
        title: 'MER',
      }
      

    ]
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>
        <div style={searchBarStyle}>
          <SearchBar tickers={this.state.tickers} />
        </div>
        
      </div>
    );
  
  }

  
}



const searchBarStyle = {
  marginTop: '20px',
}













export default App;
