import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import SearchBar from './components/searchbar/search_bar.js';
import MainChart from './components/MainChart.js';
import MovingAverageBtn from './components/MovingAverageBtn';

import { Container, Row, Col } from 'react-bootstrap';

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

        // Saving data on current company to the state of this component. 
        this.setState({close: datas.close})
        this.setState({volume: datas.volume})
        this.setState({date: datas.date})


        console.log(datas.close, datas.volume, datas.date);
      })
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>

        <div style={searchBarContainer}>
        <div style={searchBarStyle}>
          <SearchBar loadData={this.loadData} tickers={this.state.tickers}/>          
        </div>
        </div>
        



        <div style={graphContainer}> 
        <MainChart ticker={this.state.companyInFocus} close={this.state.close} date={this.state.date}/>
        </div>
        
        <div style={chartBtnContainer}>
            <Row>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn name={['Moving Average', '10']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn name={['Moving Average', '20']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn name={['Moving Average', '30']} />
              </Col>
            </Row>
        </div>




      </div>
    );
  
  }

  
}



const searchBarStyle = {
  height: '500px',
  marginTop: '20px',
  marginBottom: '0px',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  textAlign: 'center',

}

const searchBarContainer = {
  height: '100px',
}


const graphContainer = {
  width: '80vw',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const chartBtnContainer = {
  width: '80vw',
  height: '50vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '0px',
  textAlign: 'center',
}

const chartBtnCol = {
  margin: '10px',
  display: 'inline-block',
}





export default App;
