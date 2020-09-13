import React, { useState, useEffect } from "react";

const SidebarItem = (props) => {
    return (
        <button className={`sidebar-item  ${props.active ? "active" : ""}`} onClick={props.changeSelected}>
            {props.name}
        </button>
    );
};

const DEFAULT_OPTIONS = [
    {
        name: "Brightness",
        property: "brightness",
        value: 100,
        range: {
            min: 0,
            max: 200,
        },
        unit: "%",
    },
    {
        name: "Contrast",
        property: "contrast",
        value: 100,
        range: {
            min: 0,
            max: 200,
        },
        unit: "%",
    },
    {
        name: "Saturation",
        property: "saturation",
        value: 100,
        range: {
            min: 0,
            max: 200,
        },
        unit: "%",
    },
    {
        name: "Grayscale",
        property: "grayscale",
        value: 0,
        range: {
            min: 0,
            max: 100,
        },
        unit: "%",
    },
    {
        name: "Sepia",
        property: "sepia",
        value: 0,
        range: {
            min: 0,
            max: 100,
        },
        unit: "%",
    },
    {
        name: "Hue Rotate",
        property: "hue-rotate",
        value: 0,
        range: {
            min: 0,
            max: 360,
        },
        unit: "deg",
    },
    {
        name: "Blur",
        property: "blur",
        value: 0,
        range: {
            min: 0,
            max: 20,
        },
        unit: "px",
    },
];

function Sidebar(props) {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [options, setOptions] = useState(DEFAULT_OPTIONS);

    useEffect(() => {
        if (props.selectedProperty === null) {
            props.setSelectedProperty(options[0]);
        }
        return () => {
            props.setSelectedProperty(null);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (props.updatedValue !== null) {
            setOptions((prevOptions) => {
                return prevOptions.map((option) => {
                    if (option.property !== props.updatedValue.property) return option;
                    else return { ...option, value: props.updatedValue.value };
                });
            });
            props.setUpdatedValue(null);
        }
        return () => {
            props.setUpdatedValue(null);
        };
        // eslint-disable-next-line
    }, [props.updatedValue]);

    return (
        <div className="sidebar-container">
            {options.map((option, index) => {
                return (
                    <SidebarItem
                        key={index}
                        name={option.name}
                        active={index === selectedOptionIndex}
                        changeSelected={() => {
                            setSelectedOptionIndex(index);
                            props.setSelectedProperty(options[index]);
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Sidebar;
