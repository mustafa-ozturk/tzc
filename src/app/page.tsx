"use client"

import { useState } from "react";

import TimeSlider from "./TimeSlider.tsx";
import TimeZoneIndicator from "./TimeZoneIndicator.tsx";
import Search from "./Search.tsx"

const cityTimeZones = [
    {city: "Montreal",  offset: "UTC-5", offsetNum: -5},
    {city: "Vancouver", offset: "UTC-8", offsetNum: -8},
    {city: "Tokyo",     offset: "UTC+9", offsetNum: 9},
    {city: "London",    offset: "UTC+0", offsetNum: 0},
    {city: "Istanbul",  offset: "UTC+3", offsetNum: 3}
]

export default function App() {
    const [inputVal, setInputVal] = useState("Montreal");
    const [selectedCities, setSelectedCities] = useState([]);

    const handleSearchInput = (e) => {
        setInputVal(event.target.value);
    }

    const handleCitySelection = () => {
        const cityObj = cityTimeZones.find((city) => city.city == inputVal)
        if (!cityObj) {
            return;
        }
        setSelectedCities((prev) => [...prev, cityObj]);
        setInputVal("");
    }

    return (
        <div className="app">
            <Search 
                cityTimeZones={cityTimeZones} 
                inputVal={inputVal}
                handleSearchInput={handleSearchInput}
                handleCitySelection={handleCitySelection}/>
                {/*
                    <TimeZoneIndicator x="52%" bgColor="lightblue" selectedCities={selectedCities}/>
                */}
            <TimeSlider selectedCities={selectedCities}/>
        </div>
    );
}
