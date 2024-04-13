import React ,{useEffect , useState} from "react";
import {CssBaseline, Grid} from '@material-ui/core'

import { getPlaceData } from "./api";
import Header from "./components/Header/header"
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = ()=>{
const [places,setPlaces]=useState([])
const[coordinates,setCoordinates] = useState({})
const[bounds,setBounds]=useState(null);

useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    setCoordinates({lat:latitude,lng:longitude})
})
},[]);
     
useEffect(()=>{
    getPlaceData()
    .then((data)=>{
        console.log(data);
        setPlaces(data);
    })
},[coordinates,bounds]);
    
    return (
        <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:'100%', margin:'0%'}}   > 
<Grid items xs={12} md={4}>
<List/>
</Grid>
<Grid items xs={12} md={8}>
    <Map
    setCoordinates={setCoordinates}
    setBounds={setBounds}
    coordinates={coordinates}
    
    />
</Grid>

        </Grid>

        
        
        </>
    )
}

export default App;