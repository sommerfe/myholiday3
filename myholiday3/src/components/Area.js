/* eslint-disable eqeqeq */
import React from 'react';


class Area extends React.Component {
    number = this.props.number;
    img = this.props.img;
    title = this.props.title;
    idName = this.props.idName;
    clicked = false;

    areaActivate = (choosenArea, deactivateArea) => {
      //console.log('choosenArea: ' + choosenArea + ' idname: ' + this.idName + ' title: ' + this.title);
      var element = document.getElementById(this.idName);
      if(choosenArea == this.idName) {
          if(!this.clicked){
              element.classList.add('chooseClicked');
              this.clicked = true;
          } else {
              element.classList.remove('chooseClicked')
              this.clicked = false;
          }
      }
      if(deactivateArea == this.idName) {
        element.classList.remove('chooseClicked')
        this.clicked = false;
      }
    }

    clickArea =  (e) => {
       this.props.areaClicked(this.idName, this.number);
      }

    render() {
        return( 
        <div  id={this.idName} className="selectable" onClick={this.clickArea}>
            <img src={this.img} alt=""/>
            <h4>{this.title}</h4>
        </div>
        );
    }
}

export default Area;