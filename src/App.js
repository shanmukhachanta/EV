import React , {useState,useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import {getPlacesData} from './api/index'

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { Place } from '@material-ui/icons';

function App() {
  
  const [places,setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  },[])

  useEffect(() => {
    console.log(coordinates);

  }, [coordinates]);

  useEffect(() => {
    if (bounds && bounds.sw && bounds.ne) {
      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data.data);
          setPlaces([...data.data]);
          console.log("places =" ,places);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [coordinates, bounds]);


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List places = {places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          setCoordinates = {setCoordinates}
          setBounds = {setBounds}
          coordinates ={coordinates}
          places = {places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

