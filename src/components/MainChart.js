import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

class MainChart extends React.Component {


    moving_average = () => {
        
    }


    get_data = () => {
        const data = {
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

        return data;
    }


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




