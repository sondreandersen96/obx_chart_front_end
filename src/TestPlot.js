import React from 'react';
import { Line } from 'react-chartjs-2';




class ThisChart extends React.Component {


    get_data = () => {
        const data = {
            labels: this.props.date,
            datasets: [
                {
                    label: this.props.ticker,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
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
                        options={{maintainAspectRatio: true}}
            
                    
                    />
                </div>
            )
        } else {
            return ('')
        }

    }

}


const chartTitle = {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
}




export default ThisChart; 




