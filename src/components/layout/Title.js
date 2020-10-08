import React from 'react';



class Title extends React.Component {

    render() {
        return (
            <div style={titleStyle}>
                <div style={titleTextStyle}>Seeking Alpha</div>
            </div>

        )



    }

}

const titleStyle = {

}

const titleTextStyle = {
    fontSize: '70px',
    textAlign: 'center',
    paddingTop: '20px',
    fontWeight: '500',
    color: 'white',
}
















export default Title;