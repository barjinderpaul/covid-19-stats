import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import image from './images/image.png';
import 'typeface-roboto';
import { Typography} from '@material-ui/core';
import  WarningSharpIcon  from '@material-ui/icons/WarningSharp';


class App extends React.Component {

    state = {
        data : {},
        country: '',
        screenWidth: window.innerWidth,
        screenOrientation: null
    }

    async componentDidMount() {
        
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({
            data : fetchedData
        });

        window.addEventListener("resize", () => this.updateWindowDimensions()); 
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({screenWidth: window.innerWidth});
        if (window.matchMedia("(orientation: portrait)").matches) {
            console.log('orientation: portrait');
            this.setState({
              screenOrientation: 'portrait'
            });
          }
      
          if (window.matchMedia("(orientation: landscape)").matches) {
            console.log('orientation: landscape');
            this.setState({screenOrientation: 'landscape'}, console.log('orientation: landscape'))
       }
    }


    isPortraitMode = () => {
        const { screenOrientation } = this.state;
        return screenOrientation === 'portrait';
    }

    handleCountryChange = async (e,country) => {
        e.preventDefault();
        console.log(country);
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    } 

    render() {
        const warningScreenSize = <><Typography variant="overline" display="block" gutterBottom>
        <WarningSharpIcon fontSize="small" color="error"/> For better experience, please use landscape mode.
      </Typography> </>
        const {data, country, screenWidth} = this.state;
        return (
            <div className = {styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards  data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                {screenWidth <= 776 && this.isPortraitMode() ? warningScreenSize : null }
                <Chart data={data} country={country} />
            </div>
        )
    }
}


export default App;