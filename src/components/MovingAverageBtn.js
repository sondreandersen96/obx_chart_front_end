import React from 'react';
import Col from 'react-bootstrap';


class MovingAverageBtn extends React.Component {


    render() {
        return (
            <div style={container}>
                <h2 style={btnText}>{this.props.name[0]} {this.props.name[1]}</h2>
            </div>
        )
    }
}


const container = {
    background: 'rgba(40,40,40, 1)',
    borderStyle: 'solid',
    borderColor: 'rgba(220,220,220, 1)',
    borderRadius: '10px',
    borderWidth: '2px',
    width: '200px',
    height: '52px',
    padding: '10px',
}

const btnText = {
    fontSize: '17px',
    color: 'rgb(36, 156, 255)',
}


export default MovingAverageBtn;