/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
function SuggestedLocations(props) {
    let locations = props.locations;

    return (
        <div className="calculatedLocations">
            <p>Possible Locations</p>
            <button>{locations[0]}</button>
            <button>{locations[1]}</button>
            <button>{locations[2]}</button>
        </div>
    )
  }

export default SuggestedLocations;