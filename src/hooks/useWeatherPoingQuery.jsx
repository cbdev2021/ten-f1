import { useGetWeatherPointQuery } from '../slices/weatherApiSlice';

const useWeatherPointSearch = ({ lat, lon }) => {
    const { data, isLoading, error } = useGetWeatherPointQuery({ lat, lon });
    console.log("Llamando a useGetWeatherPointQuery con lat:", lat, "lon:", lon);

    return {
        weatherData: data,
        isLoading,
        error
    };
};

export default useWeatherPointSearch;


// import { useGetWeatherPointQuery } from '../slices/weatherApiSlice';
// import { useState } from 'react';

// const useWeatherPointSearch = (initialLat, initialLon) => {
//     const [lat, setLat] = useState(initialLat);
//     const [lon, setLon] = useState(initialLon);
//     const { data, isLoading, error, refetch } = useGetWeatherPointQuery({ lat, lon });

//     const resetWeatherPoint = () => {
//         setLat(initialLat);
//         setLon(initialLon);
//         refetch(); // Llama a refetch para obtener nuevamente los datos del punto del clima con los valores iniciales de latitud y longitud
//     };

//     return {
//         weatherPoint: data,
//         isLoading,
//         error,
//         setLat, // Si necesitas cambiar la latitud manualmente
//         setLon, // Si necesitas cambiar la longitud manualmente
//         resetWeatherPoint // Función para resetear el punto del clima
//     };
// };

// export default useWeatherPointSearch;


// import { useGetWeatherPointQuery } from '../slices/weatherApiSlice';

// const useWeatherPointSearch = (lat, lon) => {
//     const { data, isLoading, error } = useGetWeatherPointQuery({ lat, lon });
//     console.log("Llamando a useGetWeatherPointQuery con lat:", lat, "lon:", lon);

//     return {
//         // weatherPoint: data, 
//         weatherData: data,
//         isLoading,
//         error
//     };
// };

// export default useWeatherPointSearch;

// // Importa lo necesario para usar mock
// import { useState, useEffect } from 'react';


// const mockData = 
//         {
//             "lat": "10.48801N",
//             "lon": "66.87919W",
//             "elevation": 873,
//             "timezone": "America/Caracas",
//             "units": "metric",
//             "current": {
//                 "icon": "overcast",
//                 "icon_num": 7,
//                 "summary": "Overcast",
//                 "temperature": 21.2,
//                 "wind": {
//                     "speed": 1.6,
//                     "angle": 163,
//                     "dir": "SSE"
//                 },
//                 "precipitation": {
//                     "total": 0,
//                     "type": "none"
//                 },
//                 "cloud_cover": 100
//             },
//             "hourly": {
//                 "data": [
//                     {
//                         "date": "2024-06-25T03:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 21.2,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SSE",
//                             "angle": 163
//                         },
//                         "cloud_cover": {
//                             "total": 100
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T04:00:00",
//                         "weather": "partly_clear",
//                         "icon": 28,
//                         "summary": "Partly clear",
//                         "temperature": 21.2,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SSE",
//                             "angle": 164
//                         },
//                         "cloud_cover": {
//                             "total": 55
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T05:00:00",
//                         "weather": "mostly_cloudy",
//                         "icon": 29,
//                         "summary": "Mostly cloudy",
//                         "temperature": 21,
//                         "wind": {
//                             "speed": 1.7,
//                             "dir": "SSE",
//                             "angle": 165
//                         },
//                         "cloud_cover": {
//                             "total": 74
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T06:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 21.2,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SSE",
//                             "angle": 166
//                         },
//                         "cloud_cover": {
//                             "total": 99
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T07:00:00",
//                         "weather": "partly_sunny",
//                         "icon": 4,
//                         "summary": "Partly sunny",
//                         "temperature": 21.5,
//                         "wind": {
//                             "speed": 1.7,
//                             "dir": "SSE",
//                             "angle": 162
//                         },
//                         "cloud_cover": {
//                             "total": 39
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T08:00:00",
//                         "weather": "partly_sunny",
//                         "icon": 4,
//                         "summary": "Partly sunny",
//                         "temperature": 22.8,
//                         "wind": {
//                             "speed": 1,
//                             "dir": "SSE",
//                             "angle": 149
//                         },
//                         "cloud_cover": {
//                             "total": 61
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T09:00:00",
//                         "weather": "mostly_cloudy",
//                         "icon": 5,
//                         "summary": "Mostly cloudy",
//                         "temperature": 24.8,
//                         "wind": {
//                             "speed": 0.9,
//                             "dir": "SSE",
//                             "angle": 156
//                         },
//                         "cloud_cover": {
//                             "total": 69
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T10:00:00",
//                         "weather": "rain_shower",
//                         "icon": 13,
//                         "summary": "Rain shower",
//                         "temperature": 25.5,
//                         "wind": {
//                             "speed": 1,
//                             "dir": "SSE",
//                             "angle": 155
//                         },
//                         "cloud_cover": {
//                             "total": 77
//                         },
//                         "precipitation": {
//                             "total": 0.2,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T11:00:00",
//                         "weather": "light_rain",
//                         "icon": 10,
//                         "summary": "Light rain",
//                         "temperature": 25.5,
//                         "wind": {
//                             "speed": 1.5,
//                             "dir": "S",
//                             "angle": 174
//                         },
//                         "cloud_cover": {
//                             "total": 95
//                         },
//                         "precipitation": {
//                             "total": 0.6,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T12:00:00",
//                         "weather": "rain",
//                         "icon": 11,
//                         "summary": "Rain",
//                         "temperature": 26,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SSE",
//                             "angle": 166
//                         },
//                         "cloud_cover": {
//                             "total": 97
//                         },
//                         "precipitation": {
//                             "total": 1.2,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T13:00:00",
//                         "weather": "tstorm",
//                         "icon": 14,
//                         "summary": "Thunderstorm",
//                         "temperature": 26.5,
//                         "wind": {
//                             "speed": 1.9,
//                             "dir": "SSE",
//                             "angle": 167
//                         },
//                         "cloud_cover": {
//                             "total": 93
//                         },
//                         "precipitation": {
//                             "total": 1.8,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T14:00:00",
//                         "weather": "tstorm",
//                         "icon": 14,
//                         "summary": "Thunderstorm",
//                         "temperature": 26.2,
//                         "wind": {
//                             "speed": 1.9,
//                             "dir": "S",
//                             "angle": 169
//                         },
//                         "cloud_cover": {
//                             "total": 92
//                         },
//                         "precipitation": {
//                             "total": 1.9,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T15:00:00",
//                         "weather": "tstorm",
//                         "icon": 14,
//                         "summary": "Thunderstorm",
//                         "temperature": 25,
//                         "wind": {
//                             "speed": 1.7,
//                             "dir": "SSE",
//                             "angle": 150
//                         },
//                         "cloud_cover": {
//                             "total": 92
//                         },
//                         "precipitation": {
//                             "total": 1.7,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T16:00:00",
//                         "weather": "tstorm_shower",
//                         "icon": 15,
//                         "summary": "Local thunderstorms",
//                         "temperature": 24.5,
//                         "wind": {
//                             "speed": 1.7,
//                             "dir": "SSE",
//                             "angle": 158
//                         },
//                         "cloud_cover": {
//                             "total": 89
//                         },
//                         "precipitation": {
//                             "total": 0.8,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T17:00:00",
//                         "weather": "tstorm",
//                         "icon": 14,
//                         "summary": "Thunderstorm",
//                         "temperature": 24.2,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SSE",
//                             "angle": 154
//                         },
//                         "cloud_cover": {
//                             "total": 100
//                         },
//                         "precipitation": {
//                             "total": 0.4,
//                             "type": "rain"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T18:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 23.5,
//                         "wind": {
//                             "speed": 1.6,
//                             "dir": "SE",
//                             "angle": 145
//                         },
//                         "cloud_cover": {
//                             "total": 100
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T19:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 24,
//                         "wind": {
//                             "speed": 2,
//                             "dir": "SSE",
//                             "angle": 156
//                         },
//                         "cloud_cover": {
//                             "total": 100
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T20:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 23.2,
//                         "wind": {
//                             "speed": 2.4,
//                             "dir": "SSE",
//                             "angle": 157
//                         },
//                         "cloud_cover": {
//                             "total": 96
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T21:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 22.8,
//                         "wind": {
//                             "speed": 2.6,
//                             "dir": "SSE",
//                             "angle": 160
//                         },
//                         "cloud_cover": {
//                             "total": 92
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T22:00:00",
//                         "weather": "cloudy",
//                         "icon": 30,
//                         "summary": "Cloudy",
//                         "temperature": 23,
//                         "wind": {
//                             "speed": 2.8,
//                             "dir": "SSE",
//                             "angle": 161
//                         },
//                         "cloud_cover": {
//                             "total": 90
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-25T23:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 22.5,
//                         "wind": {
//                             "speed": 2.8,
//                             "dir": "SSE",
//                             "angle": 157
//                         },
//                         "cloud_cover": {
//                             "total": 91
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-26T00:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 22.5,
//                         "wind": {
//                             "speed": 2.8,
//                             "dir": "SSE",
//                             "angle": 156
//                         },
//                         "cloud_cover": {
//                             "total": 99
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-26T01:00:00",
//                         "weather": "overcast",
//                         "icon": 7,
//                         "summary": "Overcast",
//                         "temperature": 22,
//                         "wind": {
//                             "speed": 2.9,
//                             "dir": "SSE",
//                             "angle": 155
//                         },
//                         "cloud_cover": {
//                             "total": 97
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     },
//                     {
//                         "date": "2024-06-26T02:00:00",
//                         "weather": "mostly_cloudy",
//                         "icon": 29,
//                         "summary": "Mostly cloudy",
//                         "temperature": 22,
//                         "wind": {
//                             "speed": 2.8,
//                             "dir": "SSE",
//                             "angle": 155
//                         },
//                         "cloud_cover": {
//                             "total": 74
//                         },
//                         "precipitation": {
//                             "total": 0,
//                             "type": "none"
//                         }
//                     }
//                 ]
//             },
//             "daily": null
//         }
//     ;

//     const useWeatherPointSearch = (lat, lon) => {
//         const [weatherPoint, setWeatherPoint] = useState(mockData); // Inicialmente setea con mockData
//         const [isLoading, setIsLoading] = useState(false);
//         const [error, setError] = useState(null);
    
//         // Función para simular un retardo de 4 segundos
//         const delayedResponse = (data) => {
//             return new Promise(resolve => {
//                 setTimeout(() => resolve(data), 7000); // Retardo de 4 segundos
//             });
//         };
    
//         useEffect(() => {
//             const fetchData = async () => {
//                 setIsLoading(true);
//                 try {
//                     // Simular retardo y luego actualizar el estado
//                     const data = await delayedResponse(mockData);
//                     setWeatherPoint(data);
//                     console.log(" retorna current hourly")
//                     setIsLoading(false);
//                     setError(null);
//                 } catch (error) {
//                     setIsLoading(false);
//                     setError(error);
//                 }
//             };
    
//             fetchData(); // Llamar a la función de fetch al cargar el componente
    
//         }, []); // No se incluyen dependencias, por lo que solo se ejecuta una vez al montar el componente
    
//         // Retorna los datos requeridos
//         return {
//             weatherPoint,
//             isLoading,
//             error
//         };
//     };
    
//     // Exporta la función useWeatherPointSearch por defecto
//     export default useWeatherPointSearch;