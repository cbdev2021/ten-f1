import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud'; // Import the Cloud icon

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            "name": "Santiago",
            "place_id": "santiago",
            "adm_area1": "Santiago Metropolitan",
            "adm_area2": "Provincia de Santiago",
            "lat": "33.45694S",
            "lon": "70.64827W",
            "temperature": "20°C"
        },
        {
            "name": "Valparaíso",
            "place_id": "valparaiso",
            "adm_area1": "Valparaíso Region",
            "adm_area2": "Provincia de Valparaíso",
            "lat": "33.04585S",
            "lon": "71.61968W",
            "temperature": "18°C"
        },
        {
            "name": "Concepción",
            "place_id": "concepcion",
            "adm_area1": "Biobío Region",
            "adm_area2": "Provincia de Concepción",
            "lat": "36.82699S",
            "lon": "73.04977W",
            "temperature": "15°C"
        },
        {
            "name": "La Serena",
            "place_id": "la_serena",
            "adm_area1": "Coquimbo Region",
            "adm_area2": "Provincia de Elqui",
            "lat": "29.90778S",
            "lon": "71.25403W",
            "temperature": "22°C"
        }
    ];

    const visibleItems = 1; // Mostrar una tarjeta a la vez

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - visibleItems : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - visibleItems ? 0 : prevIndex + 1));
    };

    return (
        <Box display="flex" alignItems="center" className="box-carousel">
            <IconButton onClick={handlePrev}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Box display="flex" overflow="hidden" width="360px">
                <Box
                    display="flex"
                    sx={{
                        transform: `translateX(-${currentIndex * (105 / items.length)}%)`, //moviemiento click ( +gap), Ancho de la tarjeta = 100% / cantidad de items
                        transition: 'transform 1s ease',
                        width: `${100 * items.length}%`
                    }}
                >

                    {items.map((item, index) => (
                        <Card key={index} sx={{ flex: `0 0 ${100 / items.length}%`, margin: '0 5px', height: '60px' }}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '8px', gap: '8px' }}>
                                <CloudIcon fontSize="large" />
                                <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                                        {item.adm_area1}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                                    {item.temperature}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
            <IconButton onClick={handleNext}>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
}

export default Carousel; 

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     const items = [
//         { title: 'Item 1', description: 'Description 1' },
//         { title: 'Item 2', description: 'Description 2' },
//         { title: 'Item 3', description: 'Description 3' },
//         { title: 'Item 4', description: 'Description 4' },
//     ];

//     const visibleItems = isSmallScreen ? 1 : 2; // Adjust based on screen size

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - visibleItems : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === items.length - visibleItems ? 0 : prevIndex + 1));
//     };

//     return (
//         <Box display="flex" alignItems="center">
//             <IconButton onClick={handlePrev}>
//                 <ArrowBackIosNewIcon />
//             </IconButton>
//             <Box display="flex" overflow="hidden" width="100%">
//                 <Box
//                     display="flex"
//                     sx={{
//                         transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//                         transition: 'transform 0.5s ease',
//                         width: `${100 * items.length / visibleItems}%`,
//                     }}
//                 >
//                     {items.map((item, index) => (
//                         // <Card key={index} sx={{ minWidth: `${100 / visibleItems}%` }}>
//                         <Card key={index} sx={{ minWidth: `${100 / visibleItems}%`, height: '50px', margin: '0 5px' }}>

//                             <CardContent>
//                                 <Typography variant="h6">
//                                     {item.title}
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     {item.description}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </Box>
//             </Box>
//             <IconButton onClick={handleNext}>
//                 <ArrowForwardIosIcon />
//             </IconButton>
//         </Box>
//     );
// }

// export default Carousel;


// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const items = [
//         { title: 'Item 1', description: 'Description 1' },
//         { title: 'Item 2', description: 'Description 2' },
//         { title: 'Item 3', description: 'Description 3' },
//         { title: 'Item 4', description: 'Description 4' },
//     ];

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <Box display="flex" alignItems="center">
//             <IconButton onClick={handlePrev}>
//                 <ArrowBackIosNewIcon />
//             </IconButton>
//             <Card>
//                 <CardContent>
//                     <Typography variant="h6">
//                         {items[currentIndex].title}
//                     </Typography>
//                     <Typography variant="body2">
//                         {items[currentIndex].description}
//                     </Typography>
//                 </CardContent>
//             </Card>
//             <IconButton onClick={handleNext}>
//                 <ArrowForwardIosIcon />
//             </IconButton>
//         </Box>
//     );
// }

// export default Carousel;
