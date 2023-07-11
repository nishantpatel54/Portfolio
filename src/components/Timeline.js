import React from 'react'
import { Chrono } from "react-chrono";

function Timeline(props){
    return (
      <div>
        <div style={{ width: "100%", height: "calc(100%-1em)", 'margin-top':'10px', 'margin-bottom':'100px'}}>
          <Chrono items={props.items} mode="VERTICAL_ALTERNATING" hideControls={true} theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8'}} useReadMore={true}>

          </Chrono>
        </div>
      </div>
    )
  }

export default Timeline