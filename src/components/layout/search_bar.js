import React from 'react';
import './search_bar.css';


class SearchBar extends React.Component {

    // This component level state stores the input into the search box. 
    state = {
        search: '',
    }

    // Handling input into the text box.
    inputChange = (e) => {
        this.setState({search: e.target.value})
    }


    inputSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.search)
        this.setState({ search: ""});
    }




    render() {
        return (
            <div  class='searchContainer'>
                <form onSubmit={this.inputSubmit} className='formStyle'>
                    <img src={process.env.PUBLIC_URL + '/search_icon.png'} className='searchIconStyle'></img>
                    <input 
                        className='searchBox'
                        maxLength='8'
                        placeholder='Ticker...'
                        value={this.state.search}
                        onChange={this.inputChange}      
                    >
                    </input>
                </form>
                
            </div>
        )
    }
}









export default SearchBar;

