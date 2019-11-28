import React from 'react';

class Parent extends React.Component {

    allContainer = <div id="allContainer">        
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
            <input type="number" id="guestsInput" placeholder="2"/>
        </div>
        <div id="costContainer" className="dataEntry">
            <h4>Maximal Cost</h4>
            <input type="number"  id="costInput" placeholder="1000"/>
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
                <div id="relaxContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Relax</h4>
                </div>
                <div id="adventureContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Adventure</h4>
                </div>
                <div  id="natureContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Nature</h4>
                </div>
                <div  id="sightseeingContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Sightseeing</h4>
                </div>
            </div>
        </div>
        <hr/>
        <div id="areaContainer">
            <div id="areaTitleContainer">
                <h2>Area</h2>
            </div>
            <div id="areaSelectContainer">
                <div id="oceanContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Ocean</h4>
                </div>
                <div id="mountainContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Mountain</h4>
                </div>
                <div  id="lakeContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Lake</h4>
                </div>
                <div  id="inlandContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Inland</h4>
                </div>
            </div>
        </div>
        <hr/>
        <div id="climateContainer">
            <div id="climateTitleContainer">
                <h2>Climate</h2>
            </div>
            <div id="climateSelectContainer">
                <div  id="tropicalContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Tropical</h4>
                </div>
                <div  id="hotContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Hot</h4>
                </div>
                <div  id="temperateContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Temperate</h4>
                </div>
                <div  id="coldContainer" className="selectable">
                    <img src="../../assets/img0.jpg" alt=""/>
                    <h4>Cold</h4>
                </div>
            </div>
        </div>
        <div id="calculateContainer">
            <button id="calculateButton">CALCULATE</button>
        </div>
    </div>
</div>

    render() {
        return (
            <header>
        <nav id="main-links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
            <div id="logo">
                <a href="#">myholiday</a>
            </div>
            <nav id="social-links">
                <ul>
                    <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                    <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
                    <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
                </ul>
            </nav>
        </header>);
    }
}

export default Parent;