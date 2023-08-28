import React from 'react';
import { Chrono } from "react-chrono";

function Experiences(props){
    return (
        <div>
        <div className='timelineWrapper'>
          <Chrono items={props.items} 
          mode="VERTICAL_ALTERNATING"
          slideShow={true} 
          enableBreakPoint={false} 
          cardHeight={(window.screen.width >= 1244 ? 200 : 500)} 
          slideItemDuration={2000} 
          slideShowType="reveal" 
          scrollable={{ scrollbar: true }} 
          hideControls={false} 
          theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8',secondary:'white'}}
          fontSizes={{
            cardTitle: (window.screen.width >= 1244 ? '1em' : '2em'),
            timelineContent: (window.screen.width >= 1244 ? '1em' : '2em'),
            title: '1rem',
          }}>
          </Chrono>
        </div>
      </div>
    )
}

export default Experiences
