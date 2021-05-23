import React from 'react';

import {Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image.png';

class App extends React.Component {
    state={
        data: {},
        country: '',
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({ data });
    }
    
    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
        // console.log(fetchedData);
        // console.log(country);
        // fetch the data
        // set the state
    }  
    
    render(){
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                {/* <h1>Welcome</h1> */}
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <h5>Devlop By:-   Bhanu_Pratap_10897</h5>
            </div>
        );
    }
}

export default App;