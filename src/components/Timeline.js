import React from 'react'
import { Chrono } from "react-chrono";

function Timeline(){
    const items = [{
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://picsum.photos/200"
        }
      }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/200"
          }
        }
      },
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/200"
          }
        }
      }];

    return (
      <div style={{ width: "100%", height: "100%", 'margin-top':'10px'}}>
        <Chrono items={items} mode='VERTICAL_ALTERNATING' hideControls={true}/>
      </div>
    )
  }

export default Timeline