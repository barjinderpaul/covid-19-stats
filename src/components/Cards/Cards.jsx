import React from 'react';
import {Card, CardContent, Typography, Grid, CircularProgress} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({data :{ confirmed,recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
      return  <CircularProgress color="secondary" />
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {1} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of confirmed cases of COVID-19</Typography>                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {recovered.value} duration = {1} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {deaths.value} duration = {1} separator = "," />    
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>                        
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;