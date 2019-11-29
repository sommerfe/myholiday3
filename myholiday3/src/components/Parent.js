import React from 'react';
import img0 from '../assets/img0.jpg'
import Activity from './Activity'
import '../App.css';

class Parent extends React.Component {

    activities = [];
    clicked = [false, false, false, false, false, false, false, false, false, false, false, false];

    elementClicked = (idName) => {
        if(this.activities.includes(idName)){
            this.activities.splice( this.activities.indexOf(idName), 1 );
        } else {
            this.activities.push(idName);
        }
    }

    clickRelax = ()  => {
        var element = document.getElementById('relaxContainer');
        if(!this.clicked[0]){
          this.activities.push('relax');
          this.clicked[0] = true;
          element.classList.add('chooseClicked');
        } else {
          this.clicked[0] = false;
          element.classList.remove('chooseClicked')
        }
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
                    <Activity title={"Relax"} img={img0} idName={"relaxContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Adventure"} img={img0} idName={"adventureContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Nature"} img={img0} idName={"natureContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Sightseeing"} img={img0} idName={"sightseeingContainer"} elementClicked={this.elementClicked}/>
                </div>
            </div>
            <hr/>
            <div id="areaContainer">
                <div id="areaTitleContainer">
                    <h2>Area</h2>
                </div>
                <div id="areaSelectContainer">

                    <Activity title={"Ocean"} img={img0} idName={"oceanContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Mountain"} img={img0} idName={"mountainContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Lake"} img={img0} idName={"lakeContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Inland"} img={img0} idName={"inlandContainer"} elementClicked={this.elementClicked}/>

                </div>
            </div>
            <hr/>
            <div id="climateContainer">
                <div id="climateTitleContainer">
                    <h2>Climate</h2>
                </div>
                <div id="climateSelectContainer">
                    <Activity title={"Tropical"} img={img0} idName={"tropicalContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Hot"} img={img0} idName={"hotContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Temperate"} img={img0} idName={"temperateContainer"} elementClicked={this.elementClicked}/>
                    <Activity title={"Cold"} img={img0} idName={"coldContainer"} elementClicked={this.elementClicked}/>
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