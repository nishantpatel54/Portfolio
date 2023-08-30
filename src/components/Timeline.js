import React from 'react'
import { Chrono } from "react-chrono";
import data from './data.js';
function Timeline(){
    let screen_size = window.screen.width >= 1244
    let Data = (screen_size) ? data.courses : data.courses_mobile
    return (
      <div className='timelineWrapper'>
        <Chrono 
        items={Data} 
        mode='VERTICAL_ALTERNATING'
        cardHeight={( screen_size ? 200 : 500)} 
        slideShow={true} 
        slideItemDuration={2000} 
        slideShowType="reveal" 
        scrollable={{ scrollbar: true }} hideControls={false}
        fontSizes={{
          cardTitle: (screen_size ? '1em' : '2em'),
          timelineContent: (screen_size ? '1em' : '2em'),
          title: '1rem',
        }}
        enableOutline={true}
        theme={{cardBgColor:'#21222A', cardDetailsColor:'#DEEBF8', secondary:'white'}}>
        
        </Chrono>
      </div>
    )
  
  }

export default Timeline