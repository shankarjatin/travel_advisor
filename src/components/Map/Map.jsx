import React from "react";
import GoogleMapReact from "google-map-react";
import {paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({setCoordinates,setBounds,coordinates})=>{
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px')
    
    return (
       <div className={classes.mapContainer}>
<GoogleMapReact
bootstrapURLKeys={{key:'AIzaSyAI6-D4-zWC3G-zDGk8I5MEY4xIYRnNXdI'}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50,50,50,50]}
options={''}
onChange={(e)=>{
    setCoordinates({lat:e.center.lat , lng:e.center.lng})
    setBounds({ne: e.marginBounds.ne , sw:e.marginBounds.sw})
}}
onChildClick={''}
>

</GoogleMapReact>
       </div>
    )
}

export default Map;