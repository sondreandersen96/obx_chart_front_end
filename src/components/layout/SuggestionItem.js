import React from 'react';
import './SuggestionItem.css';

class SuggestionItem extends React.Component {

    


    render() {
        return (
            <a className='suggestionBoxItem'>{this.props.ticker}</a>
        )
    }
}



export default SuggestionItem; 

