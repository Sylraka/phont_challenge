
import { useState, useEffect } from "react";
import React from "react"

import data from "./../../data/timelinedata.json"
import "./../page.css"

export const TimelineComponent = () => {
    const [currentSubtitle, setCurrentSubtitle] = useState(data[0].subtitle);
    const [linePosition, setLinePosition] = useState(0);

    const handleTimestampClick = (subtitle, e) => {
        setCurrentSubtitle(subtitle)

        const svg = document.getElementById("svg-canvas-id");
        const rect = svg.getBoundingClientRect();
    
        // Berechne die X-Position des Klicks relativ zum SVG
        const x = e.clientX - rect.left;
    
        // Setze die neue Linie oder lösche sie, falls bereits vorhanden
        setLinePosition(x);

    }

    useEffect(() => {

    },[])

    const calculateStartingPoint = (index) => {
        let sum = 0;
        for (let j = 0; j < data.length; j++) {
            const timepiece = data[j];
            sum += (timepiece.end_time - timepiece.start_time) * 30;
            if (j === index) {
                break;
            }
        }
        return sum;
    }

    return (
        <>
            <div className="video-container"></div>
            <div className="timeline-text-container">
                <div className="currentSubtitle">{currentSubtitle}</div>
            </div>
            <div className="timeline-container">
                <svg className='svg-canvas' id="svg-canvas-id">


                    {data.map((timepiece, index) => (

                        <rect
                            x={calculateStartingPoint(index) - ((timepiece.end_time - timepiece.start_time) * 30)}
                            y={35}
                            width={(timepiece.end_time - timepiece.start_time) * 30}
                            height={70}
                            fill='#3399ff'
                            stroke='white'
                            strokeWidth='1'
                            className='focusPoints'
                            onClick={e => handleTimestampClick(timepiece.subtitle, e)}
                        >{timepiece.start_time}</rect>

                    ))}
                    <line
                    x1={linePosition}
                    y1={0}
                    x2={linePosition}
                    y2={300}
                    stroke="white"
                    stroke-width="2"
                    >
                        
                    </line>

                </svg>
            </div>
        </>
    )
}