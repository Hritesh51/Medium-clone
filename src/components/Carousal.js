import React from 'react'
import { Container, Grid } from '@material-ui/core';
import image from './Screenshot (321).png';

const Carousal = () => {
    return (
        <div className="App_Main_Section">
            <Container>
            <Grid container justify="center" alignItems="center">
            <Grid item lg={6}>
            <h1>Where good ideas find you</h1>
            <p>
            Read and share new perspectives on just about any topic. Everyone’s welcome.<a href="#">Learn More</a>
            </p>
            <button>Get Started</button>
            </Grid>
            <Grid item lg={6} justify="center">
            <img 
              src={image}
              alt="medium" 
            />
            </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default Carousal;
