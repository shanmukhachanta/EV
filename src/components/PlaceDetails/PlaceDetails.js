import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo : 'https://www.example.com/random-car-image.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex">
          <LocationOnIcon color="primary" />
          <Typography variant="body2" color="textSecondary">{place.formatted_address}</Typography>
        </Box>
        {place.phone_number && (
          <Box display="flex">
            <PhoneIcon color="primary" />
            <Typography variant="body2" color="textSecondary">{place.phone_number}</Typography>
          </Box>
        )}
        <Box display="flex">
          <Rating name="read-only" value={place.rating} readOnly />
          <Typography variant="caption" color="textSecondary">out of {place.review_count} reviews</Typography>
        </Box>
        {place.address_components && (
          <div>
            <Typography variant="h6">Address Components:</Typography>
            <ul>
              {Object.keys(place.address_components).map((key) => (
                <li key={key}>
                  <strong>{key}:</strong> {place.address_components[key]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.place_link, '_blank')}>
          View on Google Maps
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
