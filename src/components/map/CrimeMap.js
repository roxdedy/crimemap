import React from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import _ from 'lodash';

const CrimeMap = (props) => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 51.5161273, lng: -0.1412782}}
    >
    {props.crimes.map((crime, index)=> (
      <Marker key={index} position={crime.location}></Marker>
    ))}
    </GoogleMap>
  );
};

export default withGoogleMap(CrimeMap);