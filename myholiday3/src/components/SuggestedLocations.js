/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {data} from '../data'

function SuggestedLocations(props) {
    let locations = props.locations;
    console.log(data[0])
    let a = selectLocations(locations, data)
    //let b = require(a[2].image)
    let b = require('../assets/adventure.jpg')

    console.log(a[2].image)

    function selectLocations(locations, da){
        let array = [];

        locations.forEach((l) => {
            array.push(da.find((d) => d.name === l))
        })
        console.log(array)
        return array;
    }
//{require(a[0].image)}
    return (
        <div className="calculatedLocations">
            
            <p>Possible Locations</p>
            <div className="optionContainer">
                <a className="linkContainer" href="https://booking.com">
                    <div id="option1" className="option">
                        <img src={require( `${ a[0].image}` )} alt="option"></img>
                        <h3>{a[0].name}</h3>
                    </div>
                </a>
                <a className="linkContainer" href="https://booking.com">
                    <div id="option2" className="option">
                        <img src={require( `${ a[1].image}` )} alt="option"></img>
                        <h3>{a[1].name}</h3>
                    </div>
                </a>
                <a className="linkContainer" href="https://booking.com">
                    <div id="option3" className="option">
                        <img src={require( `${ a[2].image}` )}  alt="option"></img>
                        <h3>{a[2].name}</h3>
                    </div>
                </a>
        </div>
    </div>
    )
  }

export default SuggestedLocations;