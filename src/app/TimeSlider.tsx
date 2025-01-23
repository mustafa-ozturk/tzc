export default function TimeSlider({selectedCities}) {
    const todayUTC = new Date(Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate()
    ));

    const endUTC = new Date(Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate() + 1
    ));

    const selectedCitiesHours = selectedCities.map((city) => {
        return getHours(todayUTC, endUTC, city.offsetNum);
    })

    return (
        <div className="timezone-area">
            <span className="city">
            {selectedCities.map((city, index) => {
                if (selectedCities.length != index + 1) {
                    return <span key={index}>{city.city}: <br /></span>
                }
                return <span key={index}>{city.city}: </span>
            })}
            </span>
            <div className="timezone-scroller">
                {selectedCitiesHours.map((hours, cityIndex) => {
                    return hours.map((hour, index) => {
                        if (hours.length == index + 1 && cityIndex + 1 != selectedCitiesHours.length) {
                            return <span key={index} className="time">{hour}<br/></span>
                        }

                        return (
                            <span key={index} className="time">
                            {hour}
                            </span>
                        )
                    })
                })}
                <br/>
            </div>
        </div>
    )
}

const getHours = (currDate, endDate, offset) => {
    currDate = new Date(currDate.getTime() + offset * 60 * 60 * 1000);
    endDate = new Date(endDate.getTime() + offset * 60 * 60 * 1000);
    const hours = []
    while (currDate <= endDate) {
        const fmtHours = currDate.getHours().toString().padStart(2, '0');
        const fmtMinutes = currDate.getMinutes().toString().padStart(2, '0');

        //console.log(`${fmtHours}:${fmtMinutes}`);
        hours.push(`${fmtHours}:${fmtMinutes}`);

        currDate = new Date(currDate.getTime() + 60 * 60 * 1000);
    }
    return hours;
}
