import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';
import { Place } from '@material-ui/icons';


const PlaceDetails = ({place})=>{
const classes = useStyles()

    return (
      <Card elevation={6}>
<CardMedia
style={{height:350}}
image={Place.photo ? Place.photo.imagr.large.url :'https://ibb.co/Wg0xjfY' }
title={Place.name}
/>

<CardContent>
    <Typography gutterBottom variant='h5'>
{Place.name}
    </Typography>
</CardContent>
      </Card>
    )
}

export default PlaceDetails ;