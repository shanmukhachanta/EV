import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid,TextField, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles.js';

const List = ({ places }) => {
  const classes = useStyles();
  const [carModel, setCarModel] = useState(''); // State for car model
  const [carSubmodel, setCarSubmodel] = useState(''); // State for car sub-model
  const [numberInput, setNumberInput] = useState(0);

  // Define options for car models and submodels
  const carModels = ['Tata', 'Hyundai', 'Mahindra', 'MG', 'Mercedes', 'Kia', 'BMW', 'BYD'];
  const submodelsByCarModel = {
    Tata: ['Nexon EV', 'Tiago EV', 'Tigor EV'],
    Hyundai: ['Kona EV', 'Ioniq 5'],
    Mahindra: ['XUV 400 EV'],
    MG: ['ZS EV'], // Add submodels for MG
    Mercedes: ['Benz EQS'], // Add submodels for Mercedes
    Kia: ['EV6'], // Add submodels for Kia
    BMW: ['i4','i7'], // Add submodels for BMW
    BYD: ['E6','Atto 3'], // Add submodels for BYD
  };

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
    setCarSubmodel(''); // Reset the submodel when car model changes
  };

  const handleCarSubmodelChange = (event) => {
    setCarSubmodel(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    const value = Math.min(Math.max(0, event.target.value), 100);
    setNumberInput(value);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">Charge stations around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="car-model-label">Car Model</InputLabel>
        <Select
          labelId="car-model-label"
          id="car-model"
          value={carModel}
          onChange={handleCarModelChange}
        >
          {carModels.map((model) => (
            <MenuItem key={model} value={model}>
              {model}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {carModel && (
        <FormControl className={classes.formControl}>
          <InputLabel id="car-submodel-label">Car Submodel</InputLabel>
          <Select
            labelId="car-submodel-label"
            id="car-submodel"
            value={carSubmodel}
            onChange={handleCarSubmodelChange}
          >
            {submodelsByCarModel[carModel].map((submodel) => (
              <MenuItem key={submodel} value={submodel}>
                {submodel}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <FormControl className={classes.formControl}>
        <TextField
          id="number-input"
          label="SOC"
          type="number"
          value={numberInput}
          onChange={handleNumberInputChange}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
        />
      </FormControl>
      

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;



