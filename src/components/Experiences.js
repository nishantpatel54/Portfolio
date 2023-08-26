import React from 'react';
import { Chrono } from "react-chrono";

function Experiences(props){
    return (
        <div>
        <div className='timelineWrapper'>
          <Chrono items={props.items} mode="VERTICAL_ALTERNATING" slideShow={true} slideItemDuration={2000} slideShowType="reveal" scrollable={{ scrollbar: true }} hideControls={false} theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8'}}>
          </Chrono>
        </div>
      </div>
    )
}

export default Experiences
