import React from "react";

function Slider(props) {
    return (
        <div className="slider-container">
            <input
                type="range"
                className="slider"
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={(e) => props.changeSelectedPropertyValue(e.target.value)}
            />
        </div>
    );
}

export default Slider;
