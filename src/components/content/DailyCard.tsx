import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const WeatherIcon = ({ icon }: { icon: number }) => {
    // Puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
    return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
};

type DailyProps = {
    daily: {
        data: {
            day: string;
            weather: string;
            icon: number;
            summary: string;
            all_day?: {
                weather: string;
                icon: number;
                temperature: number;
                temperature_min: number;
                temperature_max: number;
                wind: {
                    speed: number;
                    dir: string;
                    angle: number;
                };
                cloud_cover: {
                    total: number;
                };
                precipitation: {
                    total: number;
                    type: string;
                };
            } | null;
            morning: any;
            afternoon: any;
            evening: any;
        }[];
    };
};

const DailyCard: React.FC<DailyProps> = ({ daily }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = daily.data.length;
    const visibleItems = 1; // Mostrar 1 tarjeta a la vez para cada día
    // const cardWidth = 1200; // Ancho de cada tarjeta en píxeles
    // const incrementoDesplazamiento = cardWidth * 1.4; // Aumento del desplazamiento en un 40%
    const cardWidth = 1680; // Ancho de cada tarjeta en píxeles
    const incrementoDesplazamiento = cardWidth ;  

    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragEndX, setDragEndX] = useState<number | null>(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - visibleItems));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setDragStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (dragStartX !== null) {
            setDragEndX(e.touches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (dragStartX !== null && dragEndX !== null) {
            const difference = dragStartX - dragEndX;
            if (difference > 50) {
                setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, totalItems - visibleItems));
            } else if (difference < -50) {
                setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
            }
        }
        setDragStartX(null);
        setDragEndX(null);
    };

    return (
        <Box display="flex" alignItems="center" className="box-carousel-daily" sx={{ marginTop: '20px' }}>
            <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                <ArrowBackIosNewIcon sx={{ color: "white" }} />
            </IconButton>
            <Box
                display="flex"
                overflow="hidden"
                width="100%"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                sx={{ cursor: 'grab', height:'240px' }}
            >
                <Box
                    display="flex"
                    sx={{
                        transform: `translateX(-${(currentIndex * incrementoDesplazamiento / totalItems)}px)`,
                        transition: 'transform 0.5s ease',
                        width: `${incrementoDesplazamiento * totalItems}px`
                    }}
                >
                    {daily.data.map((day, index) => (
                        <Card key={index} sx={{ flex: '0 0 230px', margin: '0 5px' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <Typography variant="h6" fontWeight="bold">{moment(day.day).format("dddd")}</Typography>
                                <WeatherIcon icon={day.icon} />
                                {day.all_day && (
                                    <>
                                        <Typography fontWeight="bold">{day.all_day.temperature_min}° / {day.all_day.temperature_max}°</Typography>
                                        <Typography>wind: {day.all_day.wind.speed} m/s, {day.all_day.wind.dir} ({day.all_day.wind.angle}°)</Typography>
                                        <Typography>cloud cover: {day.all_day.cloud_cover.total}%</Typography>
                                        <Typography>rain: {day.all_day.precipitation.total} mm, {day.all_day.precipitation.type}</Typography>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
            <IconButton onClick={handleNext} disabled={currentIndex >= totalItems - visibleItems}>
                <ArrowForwardIosIcon sx={{ color: "white" }} />
            </IconButton>
        </Box>
    );
};

export default DailyCard;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import moment from 'moment';

// const WeatherIcon = ({ icon }) => {
//     // Puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
//     return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
// };

// type DailyProps = {
//     daily: {
//         data: {
//             day: string;
//             weather: string;
//             icon: number;
//             summary: string;
//             all_day?: {
//                 weather: string;
//                 icon: number;
//                 temperature: number;
//                 temperature_min: number;
//                 temperature_max: number;
//                 wind: {
//                     speed: number;
//                     dir: string;
//                     angle: number;
//                 };
//                 cloud_cover: {
//                     total: number;
//                 };
//                 precipitation: {
//                     total: number;
//                     type: string;
//                 };
//             } | null;
//             morning: any;
//             afternoon: any;
//             evening: any;
//         }[];
//     };
// };

// const DailyCard: React.FC<DailyProps> = ({ daily }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const totalItems = daily.data.length;
//     const visibleItems = 1; // Mostrar 1 tarjeta a la vez para cada día

//     const [dragStartX, setDragStartX] = useState<number | null>(null);
//     const [dragEndX, setDragEndX] = useState<number | null>(null);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - visibleItems));
//     };

//     const handleTouchStart = (e: React.TouchEvent) => {
//         setDragStartX(e.touches[0].clientX);
//     };

//     const handleTouchMove = (e: React.TouchEvent) => {
//         if (dragStartX !== null) {
//             setDragEndX(e.touches[0].clientX);
//         }
//     };

//     const handleTouchEnd = () => {
//         if (dragStartX !== null && dragEndX !== null) {
//             const difference = dragStartX - dragEndX;
//             if (difference > 50) {
//                 setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, totalItems - visibleItems));
//             } else if (difference < -50) {
//                 setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
//             }
//         }
//         setDragStartX(null);
//         setDragEndX(null);
//     };

//     return (
//         <Box display="flex" alignItems="center" className="box-carousel-daily" sx={{ marginTop: '20px' }}>
//             <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
//                 <ArrowBackIosNewIcon sx={{ color: "white" }} />
//             </IconButton>
//             <Box
//                 display="flex"
//                 overflow="hidden"
//                 width="100%"
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//                 sx={{ cursor: 'grab' }}
//             >
//                 <Box
//                     display="flex"
//                     sx={{
//                         transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
//                         transition: 'transform 0.5s ease',
//                         width: `${100 * totalItems}%`
//                     }}
//                 >
//                     {daily.data.map((day, index) => (
//                         <Card key={index} sx={{ flex: '0 0 230px', margin: '0 5px' }}>
//                             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
//                                 <Typography variant="h6" fontWeight="bold">{moment(day.day).format("dddd")}</Typography>
//                                 <WeatherIcon icon={day.icon} />
//                                 {day.all_day && (
//                                     <>
//                                         <Typography fontWeight="bold">{day.all_day.temperature_min}° / {day.all_day.temperature_max}°</Typography>
//                                         <Typography>wind: {day.all_day.wind.speed} m/s, {day.all_day.wind.dir} ({day.all_day.wind.angle}°)</Typography>
//                                         <Typography>cloud cover: {day.all_day.cloud_cover.total}%</Typography>
//                                         <Typography>rain: {day.all_day.precipitation.total} mm, {day.all_day.precipitation.type}</Typography>
//                                     </>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </Box>
//             </Box>
//             <IconButton onClick={handleNext} disabled={currentIndex >= totalItems - visibleItems}>
//                 <ArrowForwardIosIcon sx={{ color: "white" }} />
//             </IconButton>
//         </Box>
//     );
// };

// export default DailyCard;


// // Daily.tsx

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import moment from 'moment';

// const WeatherIcon = ({ icon }) => {
//     // Puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
//     return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
// };

// type DailyProps = {
//     daily: {
//         data: {
//             day: string;
//             weather: string;
//             icon: number;
//             summary: string;
//             all_day?: {
//                 weather: string;
//                 icon: number;
//                 temperature: number;
//                 temperature_min: number;
//                 temperature_max: number;
//                 wind: {
//                     speed: number;
//                     dir: string;
//                     angle: number;
//                 };
//                 cloud_cover: {
//                     total: number;
//                 };
//                 precipitation: {
//                     total: number;
//                     type: string;
//                 };
//             } | null;
//             morning: any;
//             afternoon: any;
//             evening: any;
//         }[];
//     };
// };

// const DailyCard: React.FC<DailyProps> = ({ daily }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const totalItems = daily.data.length;
//     const visibleItems = 1; // Mostrar 1 tarjeta a la vez para cada día

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - visibleItems));
//     };

//     const handleTouchStart = (e) => {
//         // Lógica de manejo de deslizamiento táctil si es necesario
//     };

//     const handleTouchMove = (e) => {
//         // Lógica de manejo de deslizamiento táctil si es necesario
//     };

//     const handleTouchEnd = () => {
//         // Lógica de manejo de deslizamiento táctil si es necesario
//     };

//     return (
//         <Box display="flex" alignItems="center" className="box-carousel-daily" sx={{ marginTop: '20px' }}>
//             <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
//                 <ArrowBackIosNewIcon sx={{ color: "white" }} />
//             </IconButton>
//             <Box
//                 display="flex"
//                 overflow="hidden"
//                 width="100%"
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//                 sx={{ cursor: 'grab' }}
//             >
//                 <Box
//                     display="flex"
//                     sx={{
//                         transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
//                         transition: 'transform 0.5s ease',
//                         width: `${100 * totalItems}%`
//                     }}
//                 >
//                     {daily.data.map((day, index) => (
//                         <Card key={index} sx={{ flex: '0 0 300px', margin: '0 5px' }}>
//                             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
//                                 <Typography variant="h6"  fontWeight="bold">{moment(day.day).format("dddd")}</Typography>
//                                 <WeatherIcon icon={day.icon} />
//                                 {/* <Typography>{day.weather}</Typography> */}
//                                 {day.all_day && (
//                                     // <>
//                                     //     <Typography>Temperature: {day.all_day.temperature}°C</Typography>
//                                     //     <Typography>Min Temperature: {day.all_day.temperature_min}°C</Typography>
//                                     //     <Typography>Max Temperature: {day.all_day.temperature_max}°C</Typography>
//                                     //     <Typography>Wind: {day.all_day.wind.speed} m/s, {day.all_day.wind.dir} ({day.all_day.wind.angle}°)</Typography>
//                                     //     <Typography>Cloud Cover: {day.all_day.cloud_cover.total}%</Typography>
//                                     //     <Typography>Precipitation: {day.all_day.precipitation.total} mm, {day.all_day.precipitation.type}</Typography>
//                                     // </>

//                                     <>
//                                         {/* <Typography>Temperature: {day.all_day.temperature}°C</Typography> */}
//                                         <Typography fontWeight="bold"> {day.all_day.temperature_min}° / {day.all_day.temperature_max}°</Typography>
//                                         <Typography>wind: {day.all_day.wind.speed} m/s, {day.all_day.wind.dir} ({day.all_day.wind.angle}°)</Typography>
//                                         <Typography>cloud cover: {day.all_day.cloud_cover.total}%</Typography>
//                                         <Typography>rain: {day.all_day.precipitation.total} mm, {day.all_day.precipitation.type}</Typography>
//                                     </>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </Box>
//             </Box>
//             <IconButton onClick={handleNext} disabled={currentIndex >= totalItems - visibleItems}>
//                 <ArrowForwardIosIcon sx={{ color: "white" }} />
//             </IconButton>
//         </Box>
//     );
// };

// export default DailyCard;



// import React from 'react';
// import { Box, Typography } from '@mui/material';

// type DailyCardProps = {
//     daily: {
//         data: {
//             day: string;
//             weather: string;
//             icon: number;
//             summary: string;
//             all_day?: {
//                 weather: string;
//                 icon: number;
//                 temperature: number;
//                 temperature_min: number;
//                 temperature_max: number;
//                 wind: {
//                     speed: number;
//                     dir: string;
//                     angle: number;
//                 };
//                 cloud_cover: {
//                     total: number;
//                 };
//                 precipitation: {
//                     total: number;
//                     type: string;
//                 };
//             } | null;
//             morning: any;
//             afternoon: any;
//             evening: any;
//         }[];
//     };
// };

// const DailyCard: React.FC<DailyCardProps> = ({ daily }) => {
//     // Asegúrate de que haya al menos un elemento en data
//     if (daily.data.length === 0) {
//         return null; // O algún mensaje de error o carga
//     }

//     const today = daily.data[0]; // Aquí deberías seleccionar el día correcto según tu lógica

//     // Verifica si all_day está definido antes de desestructurarlo
//     const { all_day } = today;
//     if (!all_day) {
//         return null; // Otra opción es renderizar un mensaje de error o de carga
//     }

//     // Ahora puedes desestructurar con seguridad
//     const { weather, icon, temperature, temperature_min, temperature_max, wind, cloud_cover, precipitation } = all_day;

//     return (
//         <Box>
//             <Typography variant="h6">Daily Weather</Typography>
//             <Typography>{weather}</Typography>
//             <Typography>Temperature: {temperature}°C</Typography>
//             <Typography>Min Temperature: {temperature_min}°C</Typography>
//             <Typography>Max Temperature: {temperature_max}°C</Typography>
//             <Typography>Wind: {wind.speed} m/s, {wind.dir} ({wind.angle}°)</Typography>
//             <Typography>Cloud Cover: {cloud_cover.total}%</Typography>
//             <Typography>Precipitation: {precipitation.total} mm, {precipitation.type}</Typography>
//         </Box>
//     );
// };

// export default DailyCard;


// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import moment from 'moment';

// const WeatherIcon = ({ icon }) => {
//     // Aquí puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
//     return <Typography variant="h4">🌧️</Typography>; // Ejemplo de icono
// };

// const DailyCard = ({ daily }) => {
//     const { day, weather, icon, summary, all_day } = daily.data;
//     const { temperature_min, temperature_max, wind, precipitation } = all_day;

//     return (
//         <Card sx={{ margin: '10px', width: '200px' }}>
//             <CardContent>
//                 <Typography variant="h6">{moment(day).format('dddd')}</Typography>
//                 <Typography variant="body2">{moment(day).format('DD-MM')}</Typography>
//                 <WeatherIcon icon={icon} />
//                 <Typography variant="body1">{summary}</Typography>
//                 <Typography variant="body2">{`Min ${temperature_min.toFixed(1)} °C / Max ${temperature_max.toFixed(1)} °C`}</Typography>
//                 <Typography variant="body2">{`Wind: ${wind.speed} m/s ${wind.dir}`}</Typography>
//                 {precipitation.total !== 0 && (
//                     <Typography variant="body2">{`Precipitation: ${precipitation.total.toFixed(1)} ${precipitation.type}`}</Typography>
//                 )}
//             </CardContent>
//         </Card>
//     );
  
// };

// export default DailyCard;


// import React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import moment from 'moment';

// const WeatherIcon = ({ icon }) => {
//     // Aquí puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
//     return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
// };

// const DailyCard = ({ daily }) => {
//     const { day, weather, icon, summary, all_day } = daily;
//     const { temperature_min, temperature_max, wind, precipitation } = all_day;

//     return (
//         <Card sx={{ margin: '10px', width: '200px' }}>
//             <CardContent>
//                 <Typography variant="h6">{moment(day).format('dddd')}</Typography>
//                 <Typography variant="body2">{moment(day).format('DD-MM')}</Typography>
//                 <WeatherIcon icon={icon} />
//                 <Typography variant="body1">{summary}</Typography>
//                 <Typography variant="body2">{`Min ${temperature_min.toFixed(1)} °C / Max ${temperature_max.toFixed(1)} °C`}</Typography>
//                 <Typography variant="body2">{`Wind: ${wind.speed} m/s ${wind.dir}`}</Typography>
//                 {precipitation.total !== 0 && (
//                     <Typography variant="body2">{`Precipitation: ${precipitation.total.toFixed(1)} ${precipitation.type}`}</Typography>
//                 )}
//             </CardContent>
//         </Card>
//     );
// };

// export default DailyCard;



// import { Box, Typography } from "@mui/material";
// import moment from "moment"; // Importa moment para el manejo de fechas

// const DailyCard = ({ current }) => {
//     const { temperature, summary, wind } = current;

//     // Formato de fecha
//     // const currentDate = moment().format("DD-MM");
//     const currentDate = moment().format("dddd DD [de] MMMM");

//     return (
//         <Box
//             className="content"
//             sx={{
//                 maxWidth: 275, // Ancho máximo
//                 maxHeight: 400, // Altura máxima
//                 borderRadius: 8, // Radio de borde ajustable
//                 border: "2px solid #ccc", // Color de borde
//                 padding: 2, // Espacio interno
//                 background: "linear-gradient(to right, #78a3d1, #dae4e9)",                  
//                 // display: "flex",  
//                 // flexDirection: "column",  
//                 // justifyContent: 'center',                  
//                 alignItems: 'center',  
//                 marginTop: '90px',
//                 marginBottom: '20px'
//             }}
//         >
//             <Typography variant="h2" sx={{ mb: 1, justifyContent:'ce' }}>
//                 {temperature.toFixed(0)}°
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 1 }}>
//                 {summary}
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//                 {currentDate}
//             </Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                 <Typography variant="body2" sx={{ mr: 1 }}>
//                    Wind:  {wind.speed} m/s
//                 </Typography>
//                 <Typography variant="body2" sx={{ mr: 1 }}>
//                     {wind.angle}°
//                 </Typography>
//                 <Typography variant="body2">
//                     {wind.dir}
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }

// export default DailyCard;

// import { Box, Typography } from "@mui/material";
// import moment from "moment";
// import   Draggable   from "react-draggable"; // Importa Draggable desde react-draggable

// const DailyCard = ({ current }) => {
//     const { temperature, summary, wind } = current;

//     const currentDate = moment().format("dddd DD [de] MMMM");

//     return (
//         <Draggable>
//             <Box
//                 className="content"
//                 sx={{
//                     maxWidth: 275,
//                     maxHeight: 400,
//                     borderRadius: 8,
//                     border: "2px solid #ccc",
//                     padding: 2,
//                     background: "linear-gradient(to right, #78a3d1, #dae4e9)",
//                     alignItems: 'center',
//                     marginTop: '90px',
//                     marginBottom: '20px',
//                     cursor: 'move' // Añade cursor: 'move' para indicar que es draggable
//                 }}
//             >
//                 <Typography variant="h2" sx={{ mb: 1 }}>
//                     {temperature.toFixed(0)}°
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 1 }}>
//                     {summary}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                     {currentDate}
//                 </Typography>
//                 <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                     <Typography variant="body2" sx={{ mr: 1 }}>
//                        Wind:  {wind.speed} m/s
//                     </Typography>
//                     <Typography variant="body2" sx={{ mr: 1 }}>
//                         {wind.angle}°
//                     </Typography>
//                     <Typography variant="body2">
//                         {wind.dir}
//                     </Typography>
//                 </Box>
//             </Box>
//         </Draggable>
//     );
// }

// export default DailyCard;



// import { Box } from "@mui/material";

// const Daily = () => {
//     return (
//         <main>
//             <Box className="content">
//                 <h1>Daily contain </h1>
//             </Box>
//         </main>
//     );
// }

// export default Daily;
