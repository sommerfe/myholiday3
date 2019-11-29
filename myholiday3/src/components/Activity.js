import React from 'react';


class Activity extends React.Component {
    img = this.props.img;
    title = this.props.title;
    idName = this.props.idName;
    clicked = false;

    clickElement =  (e) => {
        var element = document.getElementById(this.idName);
        if(!this.clicked){
          this.clicked = true;
          element.classList.add('chooseClicked');
       } else {
         this.clicked = false;
         element.classList.remove('chooseClicked')
       }
       this.props.elementClicked(this.idName);
      }

    render() {
        return( 
        <div  id={this.idName} className="selectable" onClick={this.clickElement}>
            <img src={this.img} alt=""/>
            <h4>{this.title}</h4>
        </div>
        );
    }
}

export default Activity;