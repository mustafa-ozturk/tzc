export default function TimeZoneIndicator({x, bgColor, selectedCities}) {
    return (
        <div
            className="timezone-indicator"
            style={{
                left: x,
                backgroundColor: bgColor, 
            }}
        >
            {selectedCities.map((_, i) => {
                return <span key={i} className="time">00:00<br /></span>
            })}
        </div>
    )
}
