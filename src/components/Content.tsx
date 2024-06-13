import { Box } from "@mui/material";
import DailyCard from "./content/DailyCard";
import Hourly from "./content/Hourly";

const Content = () => {
    const current = {
        "icon": "fog",
        "icon_num": 9,
        "summary": "Fog",
        "temperature": 9.2,
        "wind": {
            "speed": 0.6,
            "angle": 87,
            "dir": "E"
        }
    };

    const hourly = {
        "data": [
            {
                "date": "2024-06-13T03:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.5,
                "wind": {
                    "speed": 2.4,
                    "dir": "SSW",
                    "angle": 203
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.0,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T04:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.5,
                "wind": {
                    "speed": 3.2,
                    "dir": "SSW",
                    "angle": 200
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 9.1,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T05:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 1.3,
                    "dir": "SE",
                    "angle": 146
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 9.9,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T06:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 2.8,
                    "dir": "ENE",
                    "angle": 69
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 8.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T07:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.0,
                "wind": {
                    "speed": 3.3,
                    "dir": "ENE",
                    "angle": 66
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 5.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T08:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.0,
                "wind": {
                    "speed": 1.9,
                    "dir": "ENE",
                    "angle": 64
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 7.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T09:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.0,
                "wind": {
                    "speed": 1.6,
                    "dir": "NNE",
                    "angle": 24
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 8.2,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T10:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 1.7,
                    "dir": "ESE",
                    "angle": 117
                },
                "cloud_cover": {
                    "total": 96
                },
                "precipitation": {
                    "total": 6.4,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T11:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.8,
                "wind": {
                    "speed": 1.2,
                    "dir": "NNE",
                    "angle": 21
                },
                "cloud_cover": {
                    "total": 98
                },
                "precipitation": {
                    "total": 2.9,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T12:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 11.2,
                "wind": {
                    "speed": 2.4,
                    "dir": "E",
                    "angle": 101
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T13:00:00",
                "weather": "tstorm",
                "icon": 14,
                "summary": "Thunderstorm",
                "temperature": 11.5,
                "wind": {
                    "speed": 2.0,
                    "dir": "NNE",
                    "angle": 32
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.4,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T14:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 11.8,
                "wind": {
                    "speed": 2.5,
                    "dir": "E",
                    "angle": 86
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.4,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T15:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 12.0,
                "wind": {
                    "speed": 2.8,
                    "dir": "N",
                    "angle": 5
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.4,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T16:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 11.5,
                "wind": {
                    "speed": 2.4,
                    "dir": "N",
                    "angle": 1
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.1,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T17:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 11.0,
                "wind": {
                    "speed": 2.3,
                    "dir": "N",
                    "angle": 2
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 1.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T18:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.5,
                "wind": {
                    "speed": 1.8,
                    "dir": "N",
                    "angle": 356
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.2,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T19:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 2.0,
                    "dir": "N",
                    "angle": 356
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 3.2,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T20:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.0,
                "wind": {
                    "speed": 1.1,
                    "dir": "N",
                    "angle": 3
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 2.1,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T21:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 9.8,
                "wind": {
                    "speed": 1.9,
                    "dir": "N",
                    "angle": 359
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 1.1,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T22:00:00",
                "weather": "light_rain",
                "icon": 10,
                "summary": "Light rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 1.8,
                    "dir": "N",
                    "angle": 350
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 0.6,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-13T23:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.5,
                "wind": {
                    "speed": 1.5,
                    "dir": "NNW",
                    "angle": 341
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 0.8,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-14T00:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 10.2,
                "wind": {
                    "speed": 1.3,
                    "dir": "NW",
                    "angle": 308
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 1.7,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-14T01:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 9.8,
                "wind": {
                    "speed": 1.2,
                    "dir": "NW",
                    "angle": 318
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 1.8,
                    "type": "rain"
                }
            },
            {
                "date": "2024-06-14T02:00:00",
                "weather": "rain",
                "icon": 11,
                "summary": "Rain",
                "temperature": 9.5,
                "wind": {
                    "speed": 1.0,
                    "dir": "NNW",
                    "angle": 332
                },
                "cloud_cover": {
                    "total": 100
                },
                "precipitation": {
                    "total": 1.5,
                    "type": "rain"
                }
            }]
    };

    return (
        <main>
            <Box className="content">
                <DailyCard current={current} />
                <Hourly hourly={hourly} />
            </Box>
        </main>
    );
}

export default Content;
