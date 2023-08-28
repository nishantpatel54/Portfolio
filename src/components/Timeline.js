import React from 'react'
import { Chrono } from "react-chrono";
function Timeline(props){
    return (
      <div className='timelineWrapper'>
        <Chrono 
        items={props.items} 
        mode={(window.screen.width >= 1244 ? 'VERTICAL_ALTERNATING' : 'HORIZONTAL')} 
        cardHeight={(window.screen.width >= 1244 ? 200 : 500)} 
        enableBreakPoint={false} slideShow={true} 
        slideItemDuration={2000} slideShowType="reveal" 
        scrollable={{ scrollbar: true }} hideControls={false}
        fontSizes={{
          cardTitle: (window.screen.width >= 1244 ? '1em' : '2em'),
          timelineContent: (window.screen.width >= 1244 ? '1em' : '2em'),
          title: '1rem',
        }}
        enableOutline={true}
        theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8', secondary:'white'}}>
        
        </Chrono>
      </div>
    )
  
  }

export default Timeline