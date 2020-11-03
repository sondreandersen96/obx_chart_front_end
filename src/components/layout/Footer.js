import React from 'react';
import axios from 'axios';



class Footer extends React.Component {
    state = {
        latest_database_update: 'Loading.....'
    }

    
    componentDidMount = () => {
        // Requests database for the date when the data was last updated.
        axios.get('/api/get_latest_update_date')
            .then(res => {
                this.setState({latest_database_update: res.data})
            })

    }



    render() {
        return (

            <div style={footerContainer}>
                <p style={leftFooter}>Created by Sondre Andersen</p>
                <p style={rightFooter}>Last update: {this.state.latest_database_update}</p>
            </div>
        )
    }

}

const footerContainer = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '70px',
    background: 'black',
    color: 'white',
}

const leftFooter = {
    float: 'left',
    marginLeft: '20px',
    marginTop: '25px',
    color: 'darkGray',
}

const rightFooter = {
    float: 'right',
    marginRight: '20px',
    marginTop: '25px',
    color: 'darkGray',
}


export default Footer;

