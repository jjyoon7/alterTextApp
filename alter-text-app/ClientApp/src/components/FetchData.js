import React, { useState, useEffect } from 'react';

export function FetchData() {
    const [forecasts, setForcasts] = useState([])

    useEffect(() => {
        fetch('weatherforecast')
            .then(response => response.json())
            .then(data => {
                setForcasts(data)
            })
    }, [])

    const fetchedForcasts = forecasts.map(forecast => {
        return <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
        </tr>
    })

    return (
        <div>hey</div>
    )
}

