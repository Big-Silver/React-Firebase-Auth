import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { withAuthorization } from "../Session";

const HomePage = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCqjjbTtBAknqTRgsCqUAoBte143u8ILPg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div className="auth-content">
        <div className="container h-100">
          <div className="d-flex justify-content-center align-items-center flex-column h-100"></div>
        </div>
      </div>
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
