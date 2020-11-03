import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';



import Header from './components/layout/Header.js';
import Title from './components/layout/Title.js';
import Footer from './components/layout/Footer.js';
import ChartView from './components/chartPage/ChartView.js';
import About from './components/pages/About.js';
import CompanyDescription from './components/pages/companyDescriptions/CompanyDescriptions.js';


class App extends React.Component {

	



	render() {
		return (
			<Router>
				<div className="App">
					<Header/>
					<Title/>

					<Route path="/" exact component={ChartView}/>
					<Route path="/about" component={About}/>
					<Route path="/companies" component={CompanyDescription}/>
					
					<Footer/>
			</div>
			</Router>

		);
	
	}
}


export default App;
