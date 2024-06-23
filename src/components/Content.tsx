import React from 'react';
import { Box, Divider } from "@mui/material";
import Hourly from "./content/Hourly";
import Current from "./content/Current";
import DailyCard from "./content/DailyCard"; // Importando DailyCard
import { auto } from '@popperjs/core';
import { useGetWeatherPointQuery } from '../../src/slices/weatherApiSlice';


// const Content = () => {
const Content = ({ selectedPlace }) => {
    // const { data, isLoading } = useGetWeatherPointQuery(selectedPlace?.lon, selectedPlace?.lat); 

    // const selectedLat = parseFloat(selectedPlace?.lat);
    // const selectedLon = parseFloat(selectedPlace?.lon); 
    // const { data, isLoading } = useGetWeatherPointQuery({
    //     lat: selectedLat,
    //     lon: selectedLon,
    // });

    const { data, isLoading } = useGetWeatherPointQuery({
        lat: selectedPlace?.lat,
        lon: selectedPlace?.lon,
    });

    console.log("selectedPlace");
    console.log(selectedPlace);

    console.log("data");
    console.log(data);

    if (isLoading) {
        return <p>Loading...</p>; // Optional loading state
    }

    if (!data || !data.current) {
        return null; // Handle case where data is not yet available
    }

    const daily = {
        "data": [
            {
                "day": "2024-06-18",
                "weather": "rain",
                "icon": 11,
                "summary": "Light rain, increasing in the afternoon and evening. Temperature 9/10 °C.",
                "all_day": {
                    "weather": "rain",
                    "icon": 11,
                    "temperature": 9.2,
                    "temperature_min": 8.5,
                    "temperature_max": 10.2,
                    "wind": {
                        "speed": 1.4,
                        "dir": "NW",
                        "angle": 305
                    },
                    "cloud_cover": {
                        "total": 99
                    },
                    "precipitation": {
                        "total": 23.2,
                        "type": "rain"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-19",
                "weather": "partly_sunny",
                "icon": 4,
                "summary": "Partly sunny during the day, fog by evening. Temperature 7/15 °C.",
                "all_day": {
                    "weather": "partly_sunny",
                    "icon": 4,
                    "temperature": 9.8,
                    "temperature_min": 6.5,
                    "temperature_max": 14.8,
                    "wind": {
                        "speed": 0.8,
                        "dir": "NNW",
                        "angle": 336
                    },
                    "cloud_cover": {
                        "total": 70
                    },
                    "precipitation": {
                        "total": 0.0,
                        "type": "none"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-20",
                "weather": "overcast",
                "icon": 7,
                "summary": "Fog in the morning and evening, cloudy in the afternoon. Temperature 5/13 °C.",
                "all_day": {
                    "weather": "overcast",
                    "icon": 7,
                    "temperature": 8.5,
                    "temperature_min": 4.8,
                    "temperature_max": 12.8,
                    "wind": {
                        "speed": 0.9,
                        "dir": "W",
                        "angle": 275
                    },
                    "cloud_cover": {
                        "total": 100
                    },
                    "precipitation": {
                        "total": 0.0,
                        "type": "none"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-21",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain. Temperature 7/13 °C.",
                "all_day": {
                    "weather": "rain",
                    "icon": 11,
                    "temperature": 9.5,
                    "temperature_min": 6.8,
                    "temperature_max": 13.0,
                    "wind": {
                        "speed": 1.6,
                        "dir": "SSE",
                        "angle": 159
                    },
                    "cloud_cover": {
                        "total": 100
                    },
                    "precipitation": {
                        "total": 52.5,
                        "type": "rain"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-22",
                "weather": "light_rain",
                "icon": 10,
                "summary": "Rain, reducing in the afternoon and evening. Temperature 7/10 °C.",
                "all_day": {
                    "weather": "light_rain",
                    "icon": 10,
                    "temperature": 8.8,
                    "temperature_min": 7.0,
                    "temperature_max": 9.5,
                    "wind": {
                        "speed": 1.1,
                        "dir": "E",
                        "angle": 99
                    },
                    "cloud_cover": {
                        "total": 100
                    },
                    "precipitation": {
                        "total": 28.9,
                        "type": "rain"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-23",
                "weather": "cloudy",
                "icon": 6,
                "summary": "Fog in the morning and evening, cloudy in the afternoon. Temperature 3/10 °C.",
                "all_day": {
                    "weather": "cloudy",
                    "icon": 6,
                    "temperature": 6.5,
                    "temperature_min": 3.2,
                    "temperature_max": 9.5,
                    "wind": {
                        "speed": 0.8,
                        "dir": "SSW",
                        "angle": 196
                    },
                    "cloud_cover": {
                        "total": 90
                    },
                    "precipitation": {
                        "total": 0.0,
                        "type": "none"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            },
            {
                "day": "2024-06-24",
                "weather": "mostly_cloudy",
                "icon": 5,
                "summary": "Fog in the morning, partly sunny later. Temperature 1/13 °C.",
                "all_day": {
                    "weather": "mostly_cloudy",
                    "icon": 5,
                    "temperature": 5.5,
                    "temperature_min": 0.5,
                    "temperature_max": 13.2,
                    "wind": {
                        "speed": 0.7,
                        "dir": "S",
                        "angle": 191
                    },
                    "cloud_cover": {
                        "total": 79
                    },
                    "precipitation": {
                        "total": 0.0,
                        "type": "none"
                    }
                },
                "morning": null,
                "afternoon": null,
                "evening": null
            }
        ]
    };

    return (
        <main>
            <Box className="content">
                {selectedPlace && (
                    <Box>
                        <h2>Weather for {selectedPlace.name}</h2>
                        {/* Aquí puedes mostrar detalles adicionales del lugar seleccionado si es necesario */}

                        <h2>ejem: {data.current.temperature} </h2>
                    </Box>
                )}

                {/* <Current current={current} /> */}
                {data && <Current current={data.current} />}

                {/* <Hourly hourly={hourly} /> */}
                {data && <Hourly hourly={data.hourly}  />}

                <Divider sx={{ marginTop: '10px', borderTop: '2px solid white', margin: '10px auto', width: '70%' }} />

                <DailyCard daily={daily} />
            </Box>
        </main>
    );
}

export default Content;


// import { Box } from "@mui/material";
// import Hourly from "./content/Hourly";
// import Current from "./content/Current";
// import DailyCard from "./content/DailyCard"; // Importando DailyCard

// const Content = () => {
//     const current = {
//         "icon": "fog",
//         "icon_num": 9,
//         "summary": "Fog",
//         "temperature": 9.2,
//         "wind": {
//             "speed": 0.6,
//             "angle": 87,
//             "dir": "E"
//         }
//     };

//     const hourly = {
//         "data": [
//             {
//                 "date": "2024-06-13T03:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.5,
//                 "wind": {
//                     "speed": 2.4,
//                     "dir": "SSW",
//                     "angle": 203
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.0,
//                     "type": "rain"
//                 }
//             },
//             // Resto de datos hourly omitidos por brevedad
//         ]
//     };

//     const daily = {
//         "data": [
//             {
//                 "day": "2024-06-18",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Light rain, increasing in the afternoon and evening. Temperature 9/10 °C.",
//                 "all_day": {
//                     "weather": "rain",
//                     "icon": 11,
//                     "temperature": 9.2,
//                     "temperature_min": 8.5,
//                     "temperature_max": 10.2,
//                     "wind": {
//                         "speed": 1.4,
//                         "dir": "NW",
//                         "angle": 305
//                     },
//                     "cloud_cover": {
//                         "total": 99
//                     },
//                     "precipitation": {
//                         "total": 23.2,
//                         "type": "rain"
//                     }
//                 },
//                 "morning": null,
//                 "afternoon": null,
//                 "evening": null
//             },
//             // Resto de datos daily omitidos por brevedad
//         ]
//     };

//     return (
//         <main>
//             <Box className="content">
//                 <Current current={current} />
//                 <Hourly hourly={hourly} />
//                 <DailyCard daily={daily} /> {/* Pasando datos de daily a DailyCard */}
//             </Box>
//         </main>
//     );
// }

// export default Content;



// import { Box } from "@mui/material";
// import Hourly from "./content/Hourly";
// import Current from "./content/Current";
// // import DailyCard from "./content/DailyCard";

// const Content = () => {
//     const current = {
//         "icon": "fog",
//         "icon_num": 9,
//         "summary": "Fog",
//         "temperature": 9.2,
//         "wind": {
//             "speed": 0.6,
//             "angle": 87,
//             "dir": "E"
//         }
//     };

//     const hourly = {
//         "data": [
//             {
//                 "date": "2024-06-13T03:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.5,
//                 "wind": {
//                     "speed": 2.4,
//                     "dir": "SSW",
//                     "angle": 203
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.0,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T04:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.5,
//                 "wind": {
//                     "speed": 3.2,
//                     "dir": "SSW",
//                     "angle": 200
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 9.1,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T05:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 1.3,
//                     "dir": "SE",
//                     "angle": 146
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 9.9,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T06:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 2.8,
//                     "dir": "ENE",
//                     "angle": 69
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 8.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T07:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.0,
//                 "wind": {
//                     "speed": 3.3,
//                     "dir": "ENE",
//                     "angle": 66
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 5.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T08:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.0,
//                 "wind": {
//                     "speed": 1.9,
//                     "dir": "ENE",
//                     "angle": 64
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 7.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T09:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.0,
//                 "wind": {
//                     "speed": 1.6,
//                     "dir": "NNE",
//                     "angle": 24
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 8.2,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T10:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 1.7,
//                     "dir": "ESE",
//                     "angle": 117
//                 },
//                 "cloud_cover": {
//                     "total": 96
//                 },
//                 "precipitation": {
//                     "total": 6.4,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T11:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.8,
//                 "wind": {
//                     "speed": 1.2,
//                     "dir": "NNE",
//                     "angle": 21
//                 },
//                 "cloud_cover": {
//                     "total": 98
//                 },
//                 "precipitation": {
//                     "total": 2.9,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T12:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 11.2,
//                 "wind": {
//                     "speed": 2.4,
//                     "dir": "E",
//                     "angle": 101
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T13:00:00",
//                 "weather": "tstorm",
//                 "icon": 14,
//                 "summary": "Thunderstorm",
//                 "temperature": 11.5,
//                 "wind": {
//                     "speed": 2.0,
//                     "dir": "NNE",
//                     "angle": 32
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.4,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T14:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 11.8,
//                 "wind": {
//                     "speed": 2.5,
//                     "dir": "E",
//                     "angle": 86
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.4,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T15:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 12.0,
//                 "wind": {
//                     "speed": 2.8,
//                     "dir": "N",
//                     "angle": 5
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.4,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T16:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 11.5,
//                 "wind": {
//                     "speed": 2.4,
//                     "dir": "N",
//                     "angle": 1
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.1,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T17:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 11.0,
//                 "wind": {
//                     "speed": 2.3,
//                     "dir": "N",
//                     "angle": 2
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 1.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T18:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.5,
//                 "wind": {
//                     "speed": 1.8,
//                     "dir": "N",
//                     "angle": 356
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.2,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T19:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 2.0,
//                     "dir": "N",
//                     "angle": 356
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 3.2,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T20:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.0,
//                 "wind": {
//                     "speed": 1.1,
//                     "dir": "N",
//                     "angle": 3
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 2.1,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T21:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 9.8,
//                 "wind": {
//                     "speed": 1.9,
//                     "dir": "N",
//                     "angle": 359
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 1.1,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T22:00:00",
//                 "weather": "light_rain",
//                 "icon": 10,
//                 "summary": "Light rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 1.8,
//                     "dir": "N",
//                     "angle": 350
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 0.6,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-13T23:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.5,
//                 "wind": {
//                     "speed": 1.5,
//                     "dir": "NNW",
//                     "angle": 341
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 0.8,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-14T00:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 10.2,
//                 "wind": {
//                     "speed": 1.3,
//                     "dir": "NW",
//                     "angle": 308
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 1.7,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-14T01:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 9.8,
//                 "wind": {
//                     "speed": 1.2,
//                     "dir": "NW",
//                     "angle": 318
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 1.8,
//                     "type": "rain"
//                 }
//             },
//             {
//                 "date": "2024-06-14T02:00:00",
//                 "weather": "rain",
//                 "icon": 11,
//                 "summary": "Rain",
//                 "temperature": 9.5,
//                 "wind": {
//                     "speed": 1.0,
//                     "dir": "NNW",
//                     "angle": 332
//                 },
//                 "cloud_cover": {
//                     "total": 100
//                 },
//                 "precipitation": {
//                     "total": 1.5,
//                     "type": "rain"
//                 }
//             }]
//     };

//     return (
//         <main>
//             <Box className="content">
//                 <Current current={current} />
//                 <Hourly hourly={hourly} />
//             </Box>
//         </main>
//     );
// }

// export default Content;
