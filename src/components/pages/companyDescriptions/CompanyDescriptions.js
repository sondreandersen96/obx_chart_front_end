import React from 'react';
import axios from 'axios';


import './companyDescriptions.css';

class CompanyDescriptions extends React.Component{

    state = {
        companyDescriptions: [], 
        companyDescriptionsHaveLoaded: false,
    }


    componentDidMount = () => {
        // Load datadescriptions from API 
        axios.get('/api/get_all_company_descriptions')
        .then(res => {
            this.setState({companyDescriptionsHaveLoaded: true})
            this.setState({companyDescriptions: res.data})  
        })
    }


    getCompanyDescriptionList = () => {
        if (this.state.companyDescriptions != null) {
            return (
                this.state.companyDescriptions.map((company, index) => 
                <tr key={index}>
                    <td>{company[0]}</td>
                    <td>{company[1]}</td>
                </tr>
                )
            )
        } else {
            return ("")
        }
    }


    getLoadingSpinnerStyle = () => {
        return {
            border: '16px solid #bbbbbb',
            borderTop: '16px solid #0d82d1',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            animation: 'spin 0.45s linear infinite',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            left: '0',
            right: '0',
            marginTop: '30px',
            display: this.state.companyDescriptionsHaveLoaded ? 'none' : 'block'
        }

    }





    render() {
        return (
            <div style={tableContainerStyle}>
                
                <div style={topParagraphStyle}>
                    <h1>Company Profiles</h1>
                    <p>The following table gives a breif summary of the business of  all the companies listed on this page, which effectively are all the companies listed on the Oslo Stock Exchange. All these descriptions are loaded from Yahoo Finance's profile page for each company. These descriptions are all loaded to a webserver once, meaning this page does not request Yahoo Finance for data on every page load.</p>
                    <p>Note! All the data below belongs to Yahoo Finance.</p>
                </div>

                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.companyDescriptions.map((company, index) => 
                                <tr key={index}>
                                    <td>{company[0].toUpperCase()}</td>
                                    <td>{company[1]}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <div style={this.getLoadingSpinnerStyle()}></div>
            </div>
        )
    }
}


const topParagraphStyle = {
    textAlign: 'center',
    color: '#cccccc',
    background: '#1a1a1a',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
    padding: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginBottom: '20px',
    boxShadow: '1px 1px 4px 1px black',
}


const tableContainerStyle = {
    marginTop: '20px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
}


const tableStyle = {
    width: '100%',
    textAlign: 'left',
    color: 'gray',
}









export default CompanyDescriptions;




/*
<tr>
    <td>Company</td>
    <td>Just a test :) </td>
</tr>
*/