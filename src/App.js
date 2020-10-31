import React from 'react';

import logo from './logo.svg';
import './App.css';



import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import ChartView from './components/chartPage/ChartView.js';

class App extends React.Component {

  



  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>
        <ChartView/>

        

      </div>
    );
  
  }
}













export default App;
