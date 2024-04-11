import React from "react";
import {CssBaseline, Grid} from '@material-ui/core'

import Header from "./components/Header/header"
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = ()=>{
    return (
        <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:'100%', margin:'0%'}}   > 
<Grid items xs={12} md={4}>
<List/>
</Grid>
<Grid items xs={12} md={8}>
    <Map/>
</Grid>

        </Grid>

        
        
        </>
    )
}

export default App;