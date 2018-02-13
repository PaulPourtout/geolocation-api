import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
  </GoogleMap>
)));

export default Map;