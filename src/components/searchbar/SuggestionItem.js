import React from 'react';
import './SuggestionItem.css';

class SuggestionItem extends React.Component {


    render() {
        return (
            <a className='suggestionBoxItem' onClick={this.props.clickOnSuggestion} >{this.props.ticker}</a>
        )
    }
}



export default SuggestionItem; 

