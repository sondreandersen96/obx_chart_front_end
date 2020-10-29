import React from 'react';



class Header extends React.Component {

    render() {
        return (
            <header style={headerSizeAndBackground}>
            
                <a style={linkStyle} href='#'>About </a>
                <a style={linkStyle} href='#'>Companies </a>
                <a style={linkStyle} href='#'>Home </a>

            </header> 

        )

    }
}


const headerSizeAndBackground = {
    width: '100%',
    height: '80px',
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    float: 'right',
    padding: '20px',
    paddingRight: '30px',
    fontWeight: '600',
    textDecoration: 'underline',
}













export default Header;