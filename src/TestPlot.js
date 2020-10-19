import React from 'react';
import { Bar } from 'react-chartjs-2';




class ThisChart extends React.Component {


    get_data = () => {
        const data = {
            labels: ['Jan', 'Feb', 'Mar'],
            datasets: [
                {
                    label: 'Dataset',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: [54, 34, 43]
                }
            ]
        }

        return data;
    }


    render() {
        return (
            <div>
                <h2> Bar Example </h2>
                <Bar
                    data={this.get_data()}
                    width={100}
                    height={100}
                    options={{maintainAspectRatio: false}}
        
                
                />
            </div>
        )
    }

}



export default ThisChart; 




