/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {data} from '../data'

class SuggestedLocations extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectedLocations: this.selectLocations(this.props.locations, data) }
    }

    onLoad(feedItem){
        let updatedItems = this.state.selectedLocations;
        updatedItems.push({
            city: feedItem.city,
            country: feedItem.country,
            image: feedItem.image
        })
        this.setState({selectLocations: updatedItems})
    }
    selectLocations(locations, da){
        let array = [];

        locations.forEach((l) => {
            array.push(da.find((d) => d.city === l))
        })
        array = array.slice(0, 3)
        return array;
    }
//{require(a[0].image)}
    render(){
    return (
        <div className="calculatedLocations">
            
            <p>Possible Locations</p>
            <div className="optionContainer">
            {
            this.state.selectedLocations.map((item, i) =>
                <a className="linkContainer" href="https://booking.com">
                <div id={"option" + i} className="option">
                    <img src={item.image} alt="option"></img>
                    <h3>{item.city}</h3> 
                    <h4>{item.country}</h4> 
                </div>
            </a>
            )}
        </div>
    </div>
    )
  }
}

export default SuggestedLocations;