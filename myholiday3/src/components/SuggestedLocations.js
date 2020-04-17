/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {data} from '../data'

class SuggestedLocations extends React.Component {

    constructor(props) {
        super(props)
        this.state = {selectedLocations: this.selectLocations(this.props.locations, data) }
        console.log(this.props.toDate)
    }

    selectLocations(locations, da){
        let array = [];

        locations.forEach((l) => {
            array.push(da.find((d) => d.city === l))
        })
        
        return array;
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            this.setState({selectedLocations: this.selectLocations(this.props.locations, data)})
        }
      }
    
    calculateLink(cityId){
        let toDate = new Date(this.props.toDate);
        let fromDate = new Date(this.props.fromDate);
        console.log('toDate: ' + toDate.toString())
        console.log('fromDate: ' + fromDate.toString())
        console.log('day: ' + toDate.getDate())

        let checkinMonthday = '&checkin_monthday=' + fromDate.getDate();
        let checkinMonth = '&checkin_month=' + (fromDate.getMonth() + 1);
        let checkinYear = '&checkin_year=' + fromDate.getFullYear();
        let checkoutMonthday = '&checkout_monthday=' + toDate.getDate();
        let checkoutMonth = '&checkout_month=' + (toDate.getMonth() + 1);
        let checkoutYear = '&checkout_year='+ toDate.getFullYear();
        let groupAdults = '&group_adults=' + this.props.guests
        let baseLink = 'https://www.booking.com/searchresults.en.html?aid=2012071&city='
        let calculatedLink = baseLink + cityId + checkinMonthday  + checkinMonth + checkinYear + checkoutMonthday + checkoutMonth + checkoutYear + groupAdults;
        console.log(calculatedLink)
        //&checkin_monthday=17
        //&checkin_month=4
        //&checkin_year=2020
        //&checkout_monthday=30
        //&checkout_month=4
        //&checkout_year=2020
        //&group_adults=2
        return calculatedLink;
    }

    render(){
    

    return (
        <div className="calculatedLocationsContainer">
            <div className="calculatedLocations">

                <p>Possible Locations</p>
                <div className="optionContainer">
                    {
                    this.state.selectedLocations.map((item, i) =>
                        <a key={"option" + i} className="linkContainer" href={this.calculateLink(item.cityId)} target="_blank" rel="noopener noreferrer">
                        <div  id={"option" + i} className="option">
                            <img src={item.image} alt="option"></img>
                            <h3>{item.city}</h3> 
                            <h4>{item.country}</h4> 
                        </div>
                    </a>
                    )}
                </div>
            </div>
        </div>
    )
  }
}

export default SuggestedLocations;