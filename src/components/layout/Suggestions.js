import React from 'react';
import SuggestionItem from './SuggestionItem';



class SuggestionBox extends React.Component {

    render() {
        //console.log(this.props.tickers);

        return this.props.tickers.map( (ticker) => (
            <SuggestionItem ticker={ticker}/>
        ));
               
    }
}


export default SuggestionBox;