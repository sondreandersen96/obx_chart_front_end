import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import get_moving_average from './moving_avg_function';

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
    movingAverageData: [], 
    movingAverageActive: {mv5: false, mv10: false, mv25: false, mv50: false, mv100: false, mv200: false},
    chartLoadingSpinner: false, 
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

    // Start the loading spinner 
    this.setState({chartLoadingSpinner: true});

    // Reset moving average data 
    this.setState({movingAverageData: {}});

    const security = searchWord;

    axios.get(`/api/priceHistory/ ${security}`)
      .then(res => {
        // Remove loading spinner
        this.setState({chartLoadingSpinner: false});

        this.setState({companyInFocus: searchWord});
        const datas = res.data;

        // Saving data on current company to the state of this component. 
        this.setState({close: datas.close})
        this.setState({volume: datas.volume})
        this.setState({date: datas.date})


        console.log(datas.close, datas.volume, datas.date);

        // Calculate moving average 
        let moving_average_5 = get_moving_average(datas.close, 5);
        let moving_average_10 = get_moving_average(datas.close, 10);
        let moving_average_25 = get_moving_average(datas.close, 25);
        let moving_average_50 = get_moving_average(datas.close, 50);
        let moving_average_100 = get_moving_average(datas.close, 100);
        let moving_average_200 = get_moving_average(datas.close, 200);

        // Adding moving average arrays to the state
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv5': moving_average_5}  })
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv10': moving_average_10}  })
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv25': moving_average_25}  })
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv50': moving_average_50}  })
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv100': moving_average_100}  })
        this.setState({movingAverageData: {...this.state.movingAverageData, 'mv200': moving_average_200}  })
      })

  }



  // Moving average button function. This function is called when a moving average button is clicked.
  // ... it sets the state variable movingAverage to one of the following:
  // 1. Button is not active: set STATE 'mvN' (N = [5, 10, 25, 50, 100, 200]) = true 
  // 2. Button is active: set moving average state to false. 
  click_movingAverage = (btnName) => {
    let btn_that_is_clicked = 'mv'+btnName; // Variable that equates to that in the state dictionary. 
    
    let new_movingAverageActive = this.state.movingAverageActive;
    new_movingAverageActive[btn_that_is_clicked] = !new_movingAverageActive[btn_that_is_clicked];

    this.setState( {movingAverageActive: new_movingAverageActive} );


    console.log(this.state.movingAverageActive[btn_that_is_clicked]);
    console.log('Clicked', btnName);
  }


    //this.setState({clicked: !this.state.clicked})

    // Moving average btn container style 
    chartBtnContainerStyle = () => {
      return {
        width: '80vw',
        height: '50vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0px',
        textAlign: 'center',
        //display: this.state.companyInFocus ? 'block' : 'none',
        visibility: this.state.companyInFocus ? 'visible' : 'hidden',
        //transition: 'all ease-in 2s',
      }
  }

  getLoadingSpinnerStyle = () => {
    return {
      border: '16px solid #bbbbbb',
      borderTop: '16px solid #0d82d1',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      animation: 'spin 0.45s linear infinite',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      left: '0',
      right: '0',
      marginTop: '30px',
      display: this.state.chartLoadingSpinner ? 'block' : 'none',
    }
  }
  getLoadingSpinnerContainerStyle = () => {
    return {
      background: '#1a1a1a',
      width: '220px',
      height: '215px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '10px',
      position: 'absolute',
      left: '0',
      right: '0',
      borderRadius: '8%',
      display: this.state.chartLoadingSpinner ? 'block' : 'none',
    }
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
        
        <div style={this.getLoadingSpinnerContainerStyle()}>
          <div style={this.getLoadingSpinnerStyle()}></div>
        </div>
        
        
        <div style={graphContainer}> 
        <MainChart ticker={this.state.companyInFocus} close={this.state.close} date={this.state.date} movingAverageData={this.state.movingAverageData} movingAverageActive={this.state.movingAverageActive}/>
        </div>
        
        <div style={this.chartBtnContainerStyle()}>
            <Row>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '5']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '10']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '25']} />
              </Col>
            </Row>
            <Row>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '50']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '100']} />
              </Col>
              <Col md={4} style={chartBtnCol}> 
                <MovingAverageBtn click_movingAverage={this.click_movingAverage} name={['Moving Average', '200']} />
              </Col>
            </Row>
        </div>

      </div>
    );
  
  }
}



const searchBarStyle = {
  height: '100px',
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

/*
const chartBtnContainer = {
  width: '80vw',
  height: '50vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '0px',
  textAlign: 'center',
}
*/

const chartBtnCol = {
  margin: '10px',
  display: 'inline-block',
}









export default App;
