import React, {Component} from 'react';
import {GoogleMap, withGoogleMap,Marker} from 'react-google-maps';
import PropTypes from 'prop-types';
import 'shared/vendors/maps.css';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={15}
    options={{
      scrollwheel: false,
    }}
    defaultCenter={{lat: 47.646935, lng: -122.303763}}
  >
     <Marker
      position={{lat: 47.646935, lng: -122.303763}}
    />
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  render() {
    let styleName = this.props.styleName;
    if (!styleName) {
      styleName = 'cr-embed-responsive-21by9';
    }
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div
            className={`cr-embed-responsive ${styleName}`}
            style={{minHeight: 370}}
          />
        }
        mapElement={<div className='cr-embed-responsive-item' />}
      />
    );
  }
}

SimpleMap.propTypes = {
  styleName: PropTypes.string,
};
