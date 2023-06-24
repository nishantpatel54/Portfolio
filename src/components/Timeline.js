import React from 'react'
import { Chrono } from "react-chrono";

function Timeline(){
  const items = [
    { title: 'Timeline title 1', cardTitle: 'Card Title 1' },
    { title: 'Timeline title 2', cardTitle: 'Card Title 2' },
    { title: 'Timeline title 2', cardTitle: 'Card Title 2' },
  ];

    return (
      <div>
        <div style={{ width: "100%", height: "calc(100%-1em)", 'margin-top':'10px', 'margin-bottom':'100px'}}>
          <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls={true}>
            <div>
              <div>
                <p style={{color:'black'}}>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
              </div>
              <div>
                <img src="https://loremflickr.com/320/240" />
              </div>
            </div>
            <div>
              <div>
                <p style={{color:'black'}}>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
              </div>
              <div>
                <img src="https://loremflickr.com/320/240" />
              </div>
            </div>
            <div>
              <div>
                <p style={{color:'black'}}>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
              </div>
              <div>
                <img src="https://loremflickr.com/320/240" />
              </div>
            </div>
          </Chrono>
        </div>
      </div>
    )
  }

export default Timeline