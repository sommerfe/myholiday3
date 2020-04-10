import React from 'react';
import mountain from '../assets/categories/mountain2.jpg';
import relax from '../assets/categories/relax2.jpg';
import adventure from '../assets/categories/adventure2.jpg';
import cold from '../assets/categories/cold2.jpg';
import hot from '../assets/categories/hot2.jpg';
import inland from '../assets/categories/inland2.jpg';
import lake from '../assets/categories/lake2.jpg';
import nature from '../assets/categories/nature2.jpg';
import ocean from '../assets/categories/ocean2.jpg';
import sightseeing from '../assets/categories/sightseeing2.jpg';
import temperate from '../assets/categories/temperate2.jpg';
import tropical from '../assets/categories/tropical2.jpg';
import logo from '../assets/logo_1_300dpi_font.png';

import {data} from '../data'
import Activity from './Activity';
import Climate from './Climate';
import Area from './Area';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuggestedLocations from './SuggestedLocations';
import Impressum from './Impressum';

class Parent extends React.Component {
    climateCategory = ['hot', 'cold', 'temperate', 'tropical'];
    areaCategory = ['mountain', 'ocean', 'lake', 'inland'];
    activityCategory = ['relax', 'adventure', 'nature', 'sightseeing'];
    climateWeight = 6;
    areaWeight = 3;
    activityWeight = 1;

    activities = [];
    area = [];
    climate;
    
    constructor(props) {
        super(props);
        this.climateRef = [];
        this.areaRef = [];
        this.state = {fromDate: new Date(), toDate: new Date().setDate((new Date()).getDate() + 7) , offerList: [], possibleLocations: []}

    }

    activityClicked = (idName) => {
        if(this.activities.includes(idName)){
            this.activities.splice(this.activities.indexOf(idName), 1 );
        } else {
            this.activities.push(idName);
        }
        //console.log('Activities: ' + this.activities);
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


        //console.log('Area: ' + this.area);
    };

    climateClicked = (idName, index) => {
        this.climate = idName
        this.climateRef.map((ref) => ref.climateActivate(this.climate))
        //console.log('Climate: ' + this.climate);
    };


    // activity: 1
    // area: 3
    // climate: 6
    calculate = () => {
        let selection = this.activities.concat(this.area);
        selection.push(this.climate);
        console.log("selection: " + selection);

        let locations = [];

        data.forEach((dat) => {
            let counter = 0;
            selection.forEach((sel) => {
                if(dat.category.includes(sel)){
                   switch(this.getCategory(sel)){
                       case 'climate': counter = counter + this.climateWeight; break;
                       case 'area': counter = counter + this.areaWeight; break;
                       case 'activity': counter = counter + this.activityWeight; break;
                       default: console.log('default case');
                   }
                }
            })
            if(counter > 0) locations.push({location: dat.city, count: counter});
        })

        locations.sort((a, b) => {
            return b.count - a.count
        })
        console.log(locations)

        locations = locations.slice(0, 3)

        let selectedLocations= [];
        locations.forEach((l) => {
            selectedLocations.push(l.location)
        })

        this.setState({possibleLocations: selectedLocations});
    };

    getCategory(selection){
        if(this.isClimate(selection)) return 'climate'
        if(this.isArea(selection)) return 'area'
        if(this.isActivity(selection)) return 'activity'

    }

    isClimate(selection){
        return this.climateCategory.includes(selection);
    }

    isArea(selection){
        return this.areaCategory.includes(selection);

    }

    isActivity(selection){
        return this.activityCategory.includes(selection);

    }


    fromDateChanged = (newDate) => {
        this.setState({fromDate: newDate})    
    }

    toDateChanged = (newDate) => {
        this.setState({toDate: newDate})
    }

    render() {
        const navigationBar = <header>
        <nav id="main-links">
                {/*<ul>
                    <li><a href="google.com">Home</a></li>
                    <li><a href="google.com">Contact</a></li>
                    <li><a href="google.com">About</a></li>
                </ul>*/}
            </nav>
            <div id="logo">
                <a href="/#">
                <img src={logo} alt="logo"></img>
                </a>
            </div>
            <nav id="social-links">
                {/*<ul>
                    <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                    <li><a href="google.com"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
                    <li><a href="google.com"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
                </ul>*/}
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
                    <Activity title={"Relax"} img={relax} idName={"relax"} activityClicked={this.activityClicked}/>
                    <Activity title={"Adventure"} img={adventure} idName={"adventure"} activityClicked={this.activityClicked}/>
                    <Activity title={"Nature"} img={nature} idName={"nature"} activityClicked={this.activityClicked}/>
                    <Activity title={"Sightseeing"} img={sightseeing} idName={"sightseeing"} activityClicked={this.activityClicked}/>
                </div>
            </div>
            <hr/>
            <div id="areaContainer">
                <div id="areaTitleContainer">
                    <h2>Area</h2>
                </div>
                <div id="areaSelectContainer">
                    <Area number='0' title={"Ocean"} img={ocean} idName={"ocean"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[0] = ref}/>
                    <Area number='1' title={"Mountain"} img={mountain} idName={"mountain"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[1] = ref}/>
                    <Area number='2' title={"Lake"} img={lake} idName={"lake"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[2] = ref}/>
                    <Area number='3' title={"Inland"} img={inland} idName={"inland"} areaClicked={this.areaClicked} ref={(ref) => this.areaRef[3] = ref}/>
                </div>
            </div>
            <hr/>
            <div id="climateContainer">
                <div id="climateTitleContainer">
                    <h2>Climate</h2>
                </div>
                <div id="climateSelectContainer">
                    <Climate number='0' title={"Tropical"} img={tropical} idName={"tropical"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[0] = ref}/>
                    <Climate number='1' title={"Hot"} img={hot} idName={"hot"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[1] = ref}/>
                    <Climate number='2' title={"Temperate"} img={temperate} idName={"temperate"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[2] = ref}/>
                    <Climate number='3' title={"Cold"} img={cold} idName={"cold"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[3] = ref}/>
                </div>
            </div>
            <div id="calculateContainer">
                <button id="calculateButton" onClick={this.calculate}>Find My Holiday</button>
            </div>
        </div>
    </div>;
    let html;
    if(this.state.possibleLocations && this.state.possibleLocations.length > 0){
        html = <SuggestedLocations key="blubb" locations={this.state.possibleLocations} />
    }
        return (<div id="all">
                {navigationBar}
                {allContainer}
                {html}
                <Impressum></Impressum>
                </div>
                );
    }
}

export default Parent;