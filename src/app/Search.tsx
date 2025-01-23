export default function Search({ cityTimeZones, inputVal, handleSearchInput, handleCitySelection }) {
    return (
        <div className="search">
            <label>Select a city from the list:</label>
            <input list="cities" value={inputVal} onChange={handleSearchInput}/>
            <datalist id="cities">
                {cityTimeZones.map((ctz, i) => {
                    return (
                        <option key={i} value={ctz.city} />
                    )
                })}
            </datalist>
            <button onClick={handleCitySelection} >Add city</button>
        </div>
    )
}
