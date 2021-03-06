import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapBase = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCqjjbTtBAknqTRgsCqUAoBte143u8ILPg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div className="d-flex justify-content-center align-items-center flex-column h-100 w-100"></div>
    ),
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.data.lat, lng: props.data.lng }}
  >
    <Marker position={{ lat: props.data.lat, lng: props.data.lng }} />
  </GoogleMap>
));

export default function CustomGoogleMap(props) {
  return (
    <div className="h-100 mt-3">
      <p className="text-center">
        You're in {props.data.lat} : {props.data.lng}
      </p>
      <MapBase data={props.data} />
    </div>
  );
}
