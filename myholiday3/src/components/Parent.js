import React from 'react';
import mountain from '../assets/mountain2.jpg';
import relax from '../assets/relax2.jpg';
import adventure from '../assets/adventure2.jpg';
import cold from '../assets/cold2.jpg';
import hot from '../assets/hot2.jpg';
import inland from '../assets/inland2.jpg';
import lake from '../assets/lake2.jpg';
import nature from '../assets/nature2.jpg';
import ocean from '../assets/ocean2.jpg';
import sightseeing from '../assets/sightseeing2.jpg';
import temperate from '../assets/temperate2.jpg';
import tropical from '../assets/tropical2.jpg';

import Activity from './Activity';
import Climate from './Climate';
import TripOffer from './TripOffer'
import Area from './Area';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestedLocations from './SuggestedLocations';
import Impressum from './Impressum';

class Parent extends React.Component {
    activities = [];
    area = [];
    climate;
    constructor(props) {
        super(props);
        this.climateRef = [];
        this.areaRef = [];
        this.state = {fromDate: new Date(), toDate: new Date().setDate((new Date()).getDate() + 7) , offerList: [], possibleLocations: []}

    }

    //componentDidMount() {
    //    const element = document.getElementById("chooseContainer");
    //    const divElement = document.createElement("div");
    //    const script = document.createElement("script");
    //    divElement.style = {width: '100%', display: 'flex'};
    //    divElement.id = "c24pp-package-iframe";
    //    script.src = "https://files.check24.net/widgets/auto/129200/c24pp-package-iframe/package-iframe.js";
    //    script.async = true;
    //    element.appendChild(divElement);
    //    divElement.appendChild(script);
    //    script.onload = () => this.scriptLoaded();
    //    //document.body.appendChild(divElement);
    //  }

      scriptLoaded() {
        //window.A.sort();
      };

    activityClicked = (idName) => {
        if(this.activities.includes(idName)){
            this.activities.splice(this.activities.indexOf(idName), 1 );
        } else {
            this.activities.push(idName);
        }
        console.log('Activities: ' + this.activities);
        //this.setState({offerList: this.state.offerList.concat('stest')})
    };

    areaClicked = (idName) => {
        if(this.area.includes(idName)){
            this.area.splice( this.area.indexOf(idName), 1 );
            this.areaRef.map((ref) => ref.areaActivate(null, idName))
        }else {
            let deactivateArea = this.area[1];
            this.area[1] = this.area[0];
            this.area[0] = idName
            this.areaRef.map((ref) => ref.areaActivate(this.area[0], deactivateArea))
        }


        console.log('Area: ' + this.area);

    };

    climateClicked = (idName, index) => {
        this.climate = idName
        this.climateRef.map((ref) => ref.climateActivate(this.climate))
        console.log('Climate: ' + this.climate);
    };

    calculate = () => {
        console.log('Calculation:')
        console.log('Activities: ' + this.activities)
        console.log('Area: ' + this.area)
        console.log('Climate: ' + this.climate)
        let locations = [];
        switch(this.climate){
            case "tropicalConatiner":  locations.push('Mexico'); break;
            case "hotContainer": locations.push('Mallorca'); break;
            case "temperateContainer": locations.push('Freiburg'); break;
            case "coldContainer": locations.push('St. Moritz'); break;
            default: break;
        }

        console.log("calculate: " + this.state.possibleLocations)

        this.area.forEach((a) => {
            switch(a){
                case "oceanContainer": locations.push('Teneriffa'); break;
                case "mountainContainer": locations.push('Mt Blanc'); break;
                case "lakeContainer": locations.push('Inverness'); break;
                case "inlandContainer": locations.push('Munich'); break;
                default: break;
            }
        })
        console.log("calculate: " + this.state.possibleLocations)

        this.activities.forEach((a) => {
            switch(a){
                case "relaxContainer": locations.push('Antalya'); break;
                case "adventureContainer": locations.push('Saint Raphael'); break;
                case "natureContainer": locations.push('Krka'); break;
                case "sightseeingContainer": locations.push('London'); break;
                default: break;
            }
        })
        
        this.setState({possibleLocations: locations});
        console.log("calculate: " + this.state.possibleLocations)
    };


    fromDateChanged = (newDate) => {
        this.setState({fromDate: newDate})    
    }

    toDateChanged = (newDate) => {
        this.setState({toDate: newDate})
    }

    createOffers = () => {
        let offers = []

        this.state.offerList.forEach((offer, i) => {
           offers.push(<TripOffer id={"offer" +i} offer={offer} key={i}></TripOffer>)
        });
        return offers;
    }

    calculatedLocations = () => {
        if(this.state.possibleLocations && this.state.possibleLocations.length > 0){
            let html =<div className="calculatedLocationsContainer"><SuggestedLocations locations={this.state.possibleLocations}></SuggestedLocations></div>
            return html;
        }
        return null;
    }

    render() {
        const navigationBar = <header>
        <nav id="main-links">
                <ul>
                    <li><a href="google.com">Home</a></li>
                    <li><a href="google.com">Contact</a></li>
                    <li><a href="google.com">About</a></li>
                </ul>
            </nav>
            <div id="logo">
                <a href="google.com">myholiday</a>
            </div>
            <nav id="social-links">
                <ul>
                    <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                    <li><a href="google.com"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
                    <li><a href="google.com"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
                </ul>
            </nav>
        </header>;


        const allContainer =        
        <div id="allContainer">        
        <div id="dataBar">
            <div id="dataBarTitleContainer">
                <h2>Data</h2>
            </div>
            <div id="startCityContainer" className="dataEntry">
                <h4>Start City</h4>
                <input id="startCityInput" placeholder="Munich"/>
            </div>
            <div id="guestsContainer" className="dataEntry">
                <h4>Guests</h4>
                <input type="number" min="1" max="12" id="guestsInput" placeholder="2"/>
            </div>
           {/* <div id="costContainer" className="dataEntry">
                <h4>Maximal Cost</h4>
                <input type="number" min="0" id="costInput" placeholder="1000"/>
                </div> */}
            <div id="timeSpanContainer" className="dataEntry">
                <h4>From</h4>
                <DatePicker selected={this.state.fromDate} onChange={this.fromDateChanged} dateFormat="EE dd-MM-yyyy"/>
                <h4>To</h4>
                <DatePicker selected={this.state.toDate} onChange={this.toDateChanged} dateFormat="EE dd-MM-yyyy"/>
            </div>
            {/*<div id="distanceContainer" className="dataEntry">
                <h4>Distance from Start City</h4>
                <div className="radioDistanceContainer">
                <input type="radio" id="short" name="distance" value="short"></input>
                <label htmlFor="short">Short Distance</label><br></br>
                </div>
                <div className="radioDistanceContainer">
                <input type="radio" id="medium" name="distance" value="medium"></input>
                <label htmlFor="medium">Medium Distance</label><br></br>
                </div>
                <div className="radioDistanceContainer">
                <input type="radio" id="any" name="distance" value="any"></input>
                <label htmlFor="any">Any Distance</label>
                </div>
            </div>*/}
        </div>
    
        <div id="chooseContainer">
            <h1>Components of my dream Holiday</h1>
            <div id="activitiesContainer">
                <div id="activitiesTitleContainer">
                    <h2>Activities</h2>
                </div>
                <div id="activitiesSelectContainer">
                    <Activity title={"Relax"} img={relax} idName={"relaxContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Adventure"} img={adventure} idName={"adventureContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Nature"} img={nature} idName={"natureContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Sightseeing"} img={sightseeing} idName={"sightseeingContainer"} activityClicked={this.activityClicked}/>
                </div>
            </div>
            <hr/>
            <div id="areaContainer">
                <div id="areaTitleContainer">
                    <h2>Area</h2>
                </div>
                <div id="areaSelectContainer">
                    <Area number='0' title={"Ocean"} img={ocean} idName={"oceanContainer"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[0] = ref}/>
                    <Area number='1' title={"Mountain"} img={mountain} idName={"mountainContainer"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[1] = ref}/>
                    <Area number='2' title={"Lake"} img={lake} idName={"lakeContainer"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[2] = ref}/>
                    <Area number='3' title={"Inland"} img={inland} idName={"inlandContainer"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[3] = ref}/>
                </div>
            </div>
            <hr/>
            <div id="climateContainer">
                <div id="climateTitleContainer">
                    <h2>Climate</h2>
                </div>
                <div id="climateSelectContainer">
                    <Climate number='0' title={"Tropical"} img={tropical} idName={"tropicalContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[0] = ref}/>
                    <Climate number='1' title={"Hot"} img={hot} idName={"hotContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[1] = ref}/>
                    <Climate number='2' title={"Temperate"} img={temperate} idName={"temperateContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[2] = ref}/>
                    <Climate number='3' title={"Cold"} img={cold} idName={"coldContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[3] = ref}/>
                </div>
            </div>
            <div id="calculateContainer">
                <button id="calculateButton" onClick={this.calculate}>Find My Holiday</button>
            </div>
        </div>
    </div>;
        return (<div id="all">
                {navigationBar}
                {allContainer}
                {this.calculatedLocations()}
                    <div className="tripOfferContainer">
                        {this.createOffers()}
                    </div>
                <Impressum></Impressum>

                </div>
                );
    }
}

export default Parent;