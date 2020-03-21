/* eslint-disable eqeqeq */
import React from 'react';
import ocean from '../assets/categories/ocean2.jpg';


class TripOffer extends React.Component {
    offer = this.props.offer;


    render() {
        return( 
        <div class="tripOfferContainer">
            <div class="tripOffer">
                <img src={ocean} alt=""></img>
                <h1>Hotel Name</h1>
                <h2>Score: 90</h2>
                <p>Price: 300€</p>
                <div id="resons">
                    <p>Action Activities</p>
                </div>
            </div>
        </div>
        );
    }
}

export default TripOffer;