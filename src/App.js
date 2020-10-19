import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import SearchBar from './components/searchbar/search_bar.js';


import ThisChart from './TestPlot.js';


class App extends React.Component {

  state = {
    tickers: [],
    companyInFocus: false,
  }

  componentDidMount = () => {
    // Load all tickers that are available in the API 
    axios.get('/api/tickers/get_all_tickers_with_id')
      .then(res => {
        const tickers = res.data;
        this.setState({tickers: tickers})
      });
  }



  // Runs when search bar is submitted, then sets state of searchWord to 
  // .. the search word and request data on company to API and store the data in state. 
  loadData = (searchWord) => {
    console.log(searchWord);
    this.setState({companyInFocus: searchWord});

    const security = searchWord;

    axios.get(`/api/priceHistory/ ${security}`)
      .then(res => {
        const datas = res.data;


        console.log(datas.close, datas.volume, datas.date);
      })
  }









  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>
        <div style={searchBarStyle}>
          <SearchBar loadData={this.loadData} tickers={this.state.tickers} />          
        </div>
        
        <div> 
          <ThisChart/>
        </div>
        




      </div>
    );
  
  }

  
}



const searchBarStyle = {
  marginTop: '20px',
}













export default App;
