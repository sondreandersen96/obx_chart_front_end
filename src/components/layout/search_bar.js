import React from 'react';
import './search_bar.css';
import Suggestions from './Suggestions';


class SearchBar extends React.Component {

    // This component level state stores the input into the search box. 
    state = {
        search: '',
        searchBoxDisplay: false,
    }

    componentDidMount = () => {
        // Listening for clicks, functions: 1) Controll visibility of dropdown box. 
        document.addEventListener('mousedown', this.detectClicks, false);        
    }

    // Handling input into the text box.
    inputChange = (e) => {
        this.setState({search: e.target.value})
    }


    inputSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.search);
        this.setState({ search: ""});
    }

    
    handleClick = (e) =>  {
        e.preventDefault();
        alert('!!!!');
        console.log('Clicked');
    }
    

    // Gives style of either block or none, depending on the state variable searchBoxDisplay
    getSuggestionsStyle = () => {
        return {
            display: this.state.searchBoxDisplay ? 'block' : 'none'
        }
    }
    getFormStyle = () => {
        return {
            borderBottomLeftRadius: this.state.searchBoxDisplay ? '0px' : '20px',
            borderBottomRightRadius: this.state.searchBoxDisplay ? '0px' : '20px',
        }
    }


    // https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
    detectClicks = (e) => {
        if (document.getElementById('inputField').contains(e.target)) {
            this.setState({searchBoxDisplay: true});
        } else if (document.getElementById('searchContainer').contains(e.target)) {
            this.setState({searchBoxDisplay: true});
        } else {
            this.setState({searchBoxDisplay: false});
        }
        console.log('kjorer');
        counter = counter + 1;
        console.log(counter)
    }

    // This function detects clicks on the suggestions and put the suggestion into the search field. 
    clickOnSuggestion = (e) => {
        this.setState({search: e.target.text})
        console.log(e.target.text);
    }




    render() {
        //this.detectClicks();
        return (
            <div  id='searchContainer' className='searchContainer'>
                <form onSubmit={this.inputSubmit} className='formStyle' style={this.getFormStyle()}>
                    <img src={process.env.PUBLIC_URL + '/search_icon.png'} className='searchIconStyle'></img>
                    <input 
                        id='inputField'
                        className='searchBox'
                        maxLength='8'
                        placeholder='Ticker...'
                        value={this.state.search}
                        onChange={this.inputChange}      
                    >
                    </input>
                </form>
                <div className='suggestionBoxStyle' style={this.getSuggestionsStyle()}>
                    <Suggestions tickers={this.props.tickers} clickOnSuggestion={this.clickOnSuggestion} searchBoxDisplay={this.state.searchBoxDisplay}/>
                </div>
                







                
            </div>
        )
    }
}


var counter = 0 
/*
                <div className='suggestionBoxStyle' style={this.getSuggestionsStyle()}>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>
                    <a className='suggestionBoxItem' >Halla</a>

                </div>

*/




export default SearchBar;

