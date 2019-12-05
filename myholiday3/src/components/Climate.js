/* eslint-disable eqeqeq */
import React from 'react';


class Climate extends React.Component {
    number = this.props.number;
    img = this.props.img;
    title = this.props.title;
    idName = this.props.idName;
    clicked = false;

    climateActivate = (choosenClimate) => {
        console.log('climateActivate: ' + choosenClimate + ' idname: ' + this.idName + ' title: ' + this.title);
        var element = document.getElementById(this.idName);
        if(choosenClimate == this.idName) {
            if(!this.clicked){
                element.classList.add('chooseClicked');
                this.clicked = true;
            } else {
                element.classList.remove('chooseClicked')
                this.clicked = false;
            }
        }else {
            element.classList.remove('chooseClicked')
            this.clicked = false;
        }
    }

    clickClimate =  (e) => {
        console.log('clickClimate: ' + this.idName);

        this.props.climateClicked(this.idName, this.number);
      }

    render() {
        return( 
        <div  id={this.idName} className="selectable" onClick={this.clickClimate}>
            <img src={this.img} alt=""/>
            <h4>{this.title}</h4>
        </div>
        );
    }
}

export default Climate;