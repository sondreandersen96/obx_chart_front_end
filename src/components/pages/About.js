import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';


class About extends React.Component{



    render() {
        return (
            <div>

                <div style={firstSectionContainer}>
                    <h1 style={title}>About</h1>
                    <Row>
                        <Col md={5} style={firstSectionCol}>
                            <div style={aboutImageContainer}>
                                <img style={chartImage} src={process.env.PUBLIC_URL + '/chart_about.png'}></img>
                            </div>
                        </Col>

                        <Col md={5} style={firstSectionCol}>
                            <div style={aboutTextContainer}>
                                <p>This page empowers users to view up to 5 years of historical stock history on the Oslo Stock Exchange. It also allow users to overlay moving avarege data in order to find trends in the data. </p>
                                <p>All the data used in on this page is downloaded from Yahoo Finance using the yfinance Python library. The data is then stored in a SQLite3 database and accessed by this React App through a Flask API.</p>
                            </div>
                            
                        </Col>            

                    </Row>
                
                </div>

                

            </div>
        )
    }
}





const firstSectionContainer = {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    background: '#111111',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.3)'


}

const title = {
    textAlign: 'center', 
    fontSize: '40px',
    color: 'gray',
}

const firstSectionCol = {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',

}

const chartImage = {
    width: '300px',
}

const aboutImageContainer = {
    width: '300px',
}

const aboutTextContainer = {
    textAlign: 'left',
    width: '300px',
    color: 'gray',
}




export default About;