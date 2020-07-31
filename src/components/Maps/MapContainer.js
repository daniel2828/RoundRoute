import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
  margin: '10%',
  width: '80%',
  height: '80%'
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 28.10062,
          lng: -15.414799
        }}
      >
        <Marker onClick={this.onMarkerClick} position={{ lat: 28.101709, lng: -15.41386 }} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA61m5WgcmM_dG2rhS3IRTHa1asNQtGuFk'
})(MapContainer);
