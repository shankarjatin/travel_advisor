import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ()=>{
  const classes = useStyles();
  const [type,setType] = useState('restaurents');
  const [rating, setRating] = useState('');

const places = [
  {name:'Cool Place'},
  {name:'Best Beer'},
  {name: 'Best Streak'},
  {name:'Cool Place'},
  {name:'Best Beer'},
  {name: 'Best Streak'}
]

    return (
       <div className={classes.container}>

<Typography variant="h6">Restaurents, Hotels & Attractions around you</Typography>
<FormControl className={classes.formControl}> 
<InputLabel>Type</InputLabel>
<Select value={type} onChange={(e)=> setType(e.target.value)}>
<MenuItem value='restaurents'>Restaurents</MenuItem>
<MenuItem value='hotels'>Hotels</MenuItem>
<MenuItem value='attractions'>Attractions</MenuItem>
</Select>
</FormControl>

<FormControl className={classes.formControl}> 
<InputLabel>Rating</InputLabel>
<Select value={rating} onChange={(e)=> setRating(e.target.value)}>
<MenuItem value={0}>All</MenuItem>
<MenuItem value={3}>Above 3.0</MenuItem>
<MenuItem value={4}>Above 4.0</MenuItem>
<MenuItem value={5}>Above 5.0</MenuItem>
</Select>
</FormControl>
<Grid container spacing={3} className={classes.list}> 
{places?.map((place,i)=>(
  
  <Grid item key={i} xs={12}>
    <PlaceDetails  place={place}/>
    </Grid>
  
  ))}


</Grid>

       </div>
    )
}  

export default List;