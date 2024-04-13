import axios, * as others from 'axios';
// const axios = require('axios');


 const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  
  },
  headers: {
    'X-RapidAPI-Key': 'da60e2ec36mshe0e3e4460f42e20p1a2b6ejsn84c9b97f0292',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlaceData = async() => {
    try{
const {data:{data}} = await axios.get(URL,options)
console.log(data);
return data;

    }catch(error){
        console.log(error)
    }
}