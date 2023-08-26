import React from 'react'
import { Chrono } from "react-chrono";
function Timeline(props){
    return (
      <div className='timelineWrapper'>
        <Chrono 
        items={props.items} 
        mode='VERTICAL_ALTERNATING' 
        cardHeight={(window.screen.width >= 1244 ? 200 : 500)} 
        enableBreakPoint={false} slideShow={true} 
        slideItemDuration={2000} slideShowType="reveal" 
        scrollable={{ scrollbar: true }} hideControls={false}
        fontSizes={{
          cardTitle: (window.screen.width >= 1244 ? '1em' : '2em'),
          timelineContent: (window.screen.width >= 1244 ? '1em' : '2em'),
          title: '1rem',
        }}
        theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8'}}>
        
        </Chrono>
      </div>
    )
  
  }

export default Timeline