
import { useState, useEffect } from "react";
import React from "react"
import { Chrono } from "react-chrono";

import data from "./../../data/timelinedata.json"
import "./../TimelinePage.css"

export const TimelineComponent = () => {
    const [currentSubtitle, setCurrentSubtitle] = useState("subtitle");
    const [placeTo, setPlaceTo] = useState(0)

    const handleTimestampClick = (subtitle) => {
        setCurrentSubtitle(subtitle)
    }

    const calculateStartingPoint = (index) =>  { 
        let sum = 0;
        for (let j = 0; j < data.length; j++) {
            const timepiece = data[j];
            sum += (timepiece.end_time - timepiece.start_time) * 20;
            if (j === index) {
                break;
            }
        }
        return sum; 
    }

    return (
        <>
            {/* {data.map(timepiece => (
                <div>{timepiece.start_time}</div>

            ))} */}
            {/* <div style={{ width: "90vw", height: "980vh" }}>
                <Chrono items={timelineItems} 
                />
            </div> */}
            <div className="currentSubtitle">{currentSubtitle}</div>
            <svg className='svg-canvas' id="svg-canvas-id">


                {data.map((timepiece,index) => (

                    <rect
                    x={calculateStartingPoint(index)}
                    y={35}
                    width={(timepiece.end_time-timepiece.start_time)*10 }
                    height={50}
                    fill='#3399ff'
                    stroke='white'
                    strokeWidth='1'
                    className='focusPoints'
                    onClick={e => handleTimestampClick(timepiece.subtitle)}
                    >{timepiece.start_time}</rect>

                ))}

            </svg>
        </>
    )
}