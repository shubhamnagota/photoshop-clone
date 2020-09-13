import React, { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";

function App() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [updatedValue, setUpdatedValue] = useState(null);

    const changeStyles = () => {
        let filter = "";

        if (selectedProperty) {
            filter += `${selectedProperty.property}(${selectedProperty.value}${selectedProperty.unit})`;
        }

        return { filter };
    };

    return (
        <div className="container">
            <div className="image-container" style={changeStyles()} />

            <Sidebar
                selectedProperty={selectedProperty}
                setSelectedProperty={(property) => setSelectedProperty(property)}
                updatedValue={updatedValue}
                setUpdatedValue={() => setUpdatedValue(null)}
            />

            {selectedProperty && (
                <Slider
                    min={selectedProperty.range.min}
                    max={selectedProperty.range.max}
                    value={selectedProperty.value}
                    changeSelectedPropertyValue={(value) => {
                        setSelectedProperty({ ...selectedProperty, value });
                        setUpdatedValue({ property: selectedProperty.property, value });
                    }}
                />
            )}
        </div>
    );
}

export default App;
