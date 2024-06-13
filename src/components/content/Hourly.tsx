import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const WeatherIcon = ({ icon }) => {
    // Aquí puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
    return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
};

const Hourly = ({ hourly }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = hourly.data.length;
    const visibleItems = 1; // Mostrar 3 tarjetas a la vez

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - visibleItems));
    };

    return (
        <Box display="flex" alignItems="center" className="box-carousel-hourly">
            <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                <ArrowBackIosNewIcon sx={{ color: "white" }} />
            </IconButton>
            <Box display="flex" overflow="hidden" width="100%">
                <Box
                    display="flex"
                    sx={{
                        transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
                        transition: 'transform 1s ease',
                        width: `${100 * totalItems / visibleItems}%`
                    }}
                >
                    {hourly.data.map((hour, index) => (
                        <Card key={index} sx={{ flex: '0 0 100px', margin: '0 5px', height: '200px', width: '100px' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', gap: '8px', minHeight: '150px' }}>
                                <Typography variant="body2">{moment(hour.date).format("HH:mm")}</Typography>
                                <WeatherIcon icon={hour.icon} />
                                <Typography variant="h6">{hour.temperature.toFixed(1)}°C</Typography>
                                <Typography variant="body2">Wind: {hour.wind.speed} m/s {hour.wind.dir}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
            <IconButton onClick={handleNext} disabled={currentIndex === totalItems - visibleItems}>
                <ArrowForwardIosIcon sx={{ color: "white" }} />
            </IconButton>
        </Box>
    );
};

export default Hourly;








// import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import moment from 'moment';

// const WeatherIcon = ({ icon }) => {
//     // Aquí puedes mapear `icon` a diferentes componentes de iconos según tu necesidad
//     return <Typography variant="h4">🌧️</Typography>; // Icono de ejemplo
// };

// const Hourly = ({ hourly }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const visibleItems = 6; // Mostrar 3 tarjetas a la vez

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? hourly.data.length - visibleItems : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === hourly.data.length - visibleItems ? 0 : prevIndex + 1));
//     };

//     return (
//         <Box display="flex" alignItems="center" className="box-carousel-hourly">
//             <IconButton onClick={handlePrev}>
//                 <ArrowBackIosNewIcon sx={{ color: "white" }} />
//             </IconButton>
//             <Box display="flex" overflow="hidden" width="100%">
//                 <Box
//                     display="flex"
//                     sx={{
//                         transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//                         transition: 'transform 1s ease',
//                         width: `${100 * hourly.data.length / visibleItems}%`
//                     }}
//                 >
//                     {hourly.data.map((hour: { date: moment.MomentInput; icon: any; temperature: number; wind: { speed: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; dir: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }, index: Key | null | undefined) => (
//                         <Card key={index} sx={{ flex: '0 0 100px', margin: '0 5px', height: '200px', width: '100px' }}>
//                             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', gap: '8px', minHeight: '150px' }}>
//                                 <Typography variant="body2">{moment(hour.date).format("HH:mm")}</Typography>
//                                 <WeatherIcon icon={hour.icon} />
//                                 <Typography variant="h6">{hour.temperature.toFixed(1)}°C</Typography>
//                                 <Typography variant="body2">Wind: {hour.wind.speed} m/s {hour.wind.dir}</Typography>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </Box>
//             </Box>
//             <IconButton onClick={handleNext}>
//                 <ArrowForwardIosIcon sx={{ color: "white" }} />
//             </IconButton>
//         </Box>
//     );
// };

// export default Hourly;









// import { Box } from "@mui/material";

// const Hourly = () => {
//     return (
//         <main>
//             <Box className="content">
//                 <h1>This is the Hourly component ! </h1>
//             </Box>
//         </main>
//     );
// }

// export default Hourly;
