import React from 'react';
import './header.css';


class Header extends React.Component {

    render() {
        return (
            <header style={headerSizeAndBackground}>
            
                <a style={linkStyle} href='/about'>About </a>
                <a style={linkStyle} href='/companies'>Companies </a>
                <a style={linkStyle} href='/'>Home </a>

            </header> 

        )

    }
}


const headerSizeAndBackground = {
    width: '100%',
    height: '80px',
}

const linkStyle = {
    textDecoration: 'none',
    display: 'inline-block',
    float: 'right',
    padding: '20px',
    paddingRight: '30px',
    fontWeight: '600',
    textDecoration: 'underline',
}













export default Header;