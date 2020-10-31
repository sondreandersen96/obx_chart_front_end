import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

class MainChart extends React.Component {


    moving_average = () => {
        
    }





    get_data = () => {
        let data = {
            labels: this.props.date,
            datasets: [
                {
                    label: this.props.ticker,
                    backgroundColor: 'rgba(36, 156, 255, 0.2)',
                    borderColor: 'rgba(36, 156, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 0,
                    data: this.props.close
                }
            ]
        }
        // Adding moving average data from the state
        //const activeMovingAverage = this.props.movingAverageActive.map((x, y) => x);
        //return data;
        console.log('start');
        let activeBtns = this.props.movingAverageActive;
        for (let key in activeBtns) {
            console.log(activeBtns[key]);
            if (activeBtns[key] === true) {
                console.log(this.props.movingAverageData[key]);
                data.datasets.push({
                    label: key,
                    borderWidth: 1,
                    pointRadius: 0,
                    backgroundColor: 'rgba(36, 156, 255, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    data: this.props.movingAverageData[key]
                })
            }
        }
        // Funker greit nå, men bør kanskje vurdere at det ikke skal være mulig å ha alle knappene aktive samtidig, 
        // grunnen er at det blir veldig mye data i charten, noe som gjør at ting går ganske sakte....


        return data;
    }

    /*
    componentWillReceiveProps = () => {
        console.log('start');
        let activeBtns = this.props.movingAverageActive;
        for (let key in activeBtns) {
            console.log(activeBtns[key]);
            if (activeBtns[key] === true) {
                console.log(this.props.movingAverageData[key]);
                
            }
        }
    }
    */

    render() {
        if (this.props.close) {
            return (
                <div>
                    <h2 style={chartTitle}> {this.props.ticker} </h2>
                    <Line
                        data={this.get_data()}
                        options={{
                            maintainAspectRatio: true,
                            responsive: true
                        }}
            
                    
                    />
                </div>
            )
        } else {
            return (
                <div style={noDataDisplay}> </div>
            )
        }

    }

}


const chartTitle = {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
}

const noDataDisplay = {
    display: 'none',
}


export default MainChart; 




