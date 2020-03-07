/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';

function Impressum(props) {
    const [impressumVisible, setImpressumVisible] = useState(false);

    function impressumClicked(){
        setImpressumVisible(!impressumVisible)
    }

    function showImpressum(){
        if(impressumVisible){
            return(<h1>TEst</h1>)
        } else {
            return (<div></div>);
        }
    }

    return (
        <div className="bottomBar">
              <a  href="#home" className="active">Impressum</a>
              <a href="#news">Terms</a>
        {showImpressum()}

        </div>
    )
  }

export default Impressum;