
import { useState, useEffect } from "react";
import React from "react"

import data from "./../../data/timelinedata.json"
import "./../page.css"

export const TimelineComponent = () => {
    const [currentSubtitle, setCurrentSubtitle] = useState(data[0].subtitle);
    const [linePosition, setLinePosition] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleTimestampClick = (subtitle, e) => {
        setCurrentSubtitle(subtitle)

        const svg = document.getElementById("svg-canvas-id");
        const rect = svg.getBoundingClientRect();

        const x = e.clientX - rect.left;

        setLinePosition(x);

    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey) {
                setIsAnimating(true);
                console.log("clicked ctrl")
            }
        };

        const handleKeyUp = (event) => {
            if (!event.ctrlKey) {
                setIsAnimating(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

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
                <div className={`currentSubtitle `}>
                    <div className={isAnimating ? "animate" : ""}>
                        {currentSubtitle}</div>
                </div>
            </div>
            <div className="timeline-container">
                <svg className='svg-canvas' id="svg-canvas-id">


                    {data.map((timepiece, index) => (

                        <rect
                            key={timepiece.start_time}
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
                        strokeWidth="2"
                    >

                    </line>

                </svg>
            </div>
        </>
    )
}