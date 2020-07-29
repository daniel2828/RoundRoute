import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
  margin: '10%',
  width: '80%',
  height: '50%'
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
        <Marker
          onClick={this.onMarkerClick}
          name={'Plaza San Antonio Abad, 4-2, 35001 Las Palmas de Gran Canaria, Las Palmas, España'}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBi1ga8hKxlvfktUBikl0xl6T7pj8btxTo'
})(MapContainer);
