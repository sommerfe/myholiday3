import React from 'react';
import img0 from '../assets/img0.jpg';
import Activity from './Activity';
import Climate from './Climate';
import Area from './Area';
import '../App.css';

class Parent extends React.Component {
    
    activities = [];
    area;
    climate;
    constructor(props) {
        super(props);
        this.climateRef = [];
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
      }

    activityClicked = (idName) => {
        if(this.activities.includes(idName)){
            this.activities.splice(this.activities.indexOf(idName), 1 );
        } else {
            this.activities.push(idName);
        }
        console.log('Activities: ' + this.activities);
    }

    areaClicked = (idName) => {
        this.area = idName
        console.log('Area: ' + this.area);

    }

    climateClicked = (idName, index) => {
        this.climate = idName
        this.climateRef.map((ref) => ref.climateActivate(this.climate))
        //this.climateRef[index].climateActivate(this.climate);
        console.log('Climate: ' + this.climate);
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
            <div id="costContainer" className="dataEntry">
                <h4>Maximal Cost</h4>
                <input type="number" min="0" id="costInput" placeholder="1000"/>
            </div>
            <div id="timeSpanContainer" className="dataEntry">
                <h4>From</h4>
               <input />
                <h4>To</h4>
                <input/>
            </div>
            <div id="distanceContainer" className="dataEntry">
                <h4>Distance</h4>
                <input  id="distance" placeholder="In Kilometers (optional)"/>
            </div>
        </div>
    
        <div id="chooseContainer">
            <div id="activitiesContainer">
                <div id="activitiesTitleContainer">
                    <h2>Activities</h2>
                </div>
                <div id="activitiesSelectContainer">
                    <Activity title={"Relax"} img={img0} idName={"relaxContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Adventure"} img={img0} idName={"adventureContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Nature"} img={img0} idName={"natureContainer"} activityClicked={this.activityClicked}/>
                    <Activity title={"Sightseeing"} img={img0} idName={"sightseeingContainer"} activityClicked={this.activityClicked}/>
                </div>
            </div>
            <hr/>
            <div id="areaContainer">
                <div id="areaTitleContainer">
                    <h2>Area</h2>
                </div>
                <div id="areaSelectContainer">

                    <Area title={"Ocean"} img={img0} idName={"oceanContainer"} areaClicked={this.areaClicked}/>
                    <Area title={"Mountain"} img={img0} idName={"mountainContainer"} areaClicked={this.areaClicked}/>
                    <Area title={"Lake"} img={img0} idName={"lakeContainer"} areaClicked={this.areaClicked}/>
                    <Area title={"Inland"} img={img0} idName={"inlandContainer"} areaClicked={this.areaClicked}/>

                </div>
            </div>
            <hr/>
            <div id="climateContainer">
                <div id="climateTitleContainer">
                    <h2>Climate</h2>
                </div>
                <div id="climateSelectContainer">
                    <Climate number='0' title={"Tropical"} img={img0} idName={"tropicalContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[0] = ref}/>
                    <Climate number='1' title={"Hot"} img={img0} idName={"hotContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[1] = ref}/>
                    <Climate number='2' title={"Temperate"} img={img0} idName={"temperateContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[2] = ref}/>
                    <Climate number='3' title={"Cold"} img={img0} idName={"coldContainer"} climateClicked={this.climateClicked} ref={(ref) => this.climateRef[3] = ref}/>
                </div>
            </div>
            <div id="calculateContainer">
                <button id="calculateButton">CALCULATE</button>
            </div>
        </div>
    </div>;
        return (<div id="all">
                {navigationBar}
                {allContainer}
                </div>);
    }
}

export default Parent;