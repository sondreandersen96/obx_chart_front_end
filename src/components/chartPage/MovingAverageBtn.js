import React from 'react';
import Col from 'react-bootstrap';

import './MovingAverageBtn.css';


class MovingAverageBtn extends React.Component {

    state = {
        clicked: false,
    }

    activate_deactive_btn = () => {
        this.setState({clicked: !this.state.clicked})
    }

    get_btn_style = () => {
        return {
            background: this.state.clicked ? 'rgba(25,25,25, 1)' : 'rgba(30,30,30, 0.1)',
            color: this.state.clicked ? 'rgba(36,156, 255, 1)' : 'rgba(36,156, 255, 0.6)'
        }
    }

    

    render() {
        const btn_name1 = this.props.name[0]
        const btn_name2 = this.props.name[1]

        return (
            <div onClick={() => {this.props.click_movingAverage(btn_name2);    this.activate_deactive_btn()  }} style={this.get_btn_style()} className='btnContainer'>
                <h2 style={btnText} className='btnText'>{btn_name1} {btn_name2}</h2>
            </div>
        )
    }
}


/*
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
*/


const btnText = {

}
/*
const btnText = {
    fontSize: '17px',
    color: 'rgb(36, 156, 255)',
}
*/


export default MovingAverageBtn;