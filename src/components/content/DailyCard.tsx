import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import moment from "moment";

const DailyCard = ({ current }) => {
    const { temperature, summary, wind } = current;
    const currentDate = moment().format("dddd DD [de] MMMM");

    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setTouchEndX(null); // Reset touch end position
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX !== null && touchEndX !== null) {
            const deltaX = touchStartX - touchEndX;
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    console.log('Swiped left');
                    // Implement left swipe action if needed
                } else {
                    console.log('Swiped right');
                    // Implement right swipe action if needed
                }
            }
        }
    };

    const calculateTransform = () => {
        if (touchStartX !== null && touchEndX !== null) {
            const deltaX = touchStartX - touchEndX;
            return `translateX(-${deltaX}px)`;
        }
        return 'translateX(0)';
    };

    return (
        <Box
            className="content"
            sx={{
                maxWidth: 275,
                maxHeight: 400,
                borderRadius: 8,
                border: "2px solid #ccc",
                padding: 2,
                background: "linear-gradient(to right, #78a3d1, #dae4e9)",
                alignItems: 'center',
                marginTop: '90px',
                marginBottom: '20px',
                transition: 'transform 0.3s ease',
                transform: calculateTransform(),
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Typography variant="h2" sx={{ mb: 1 }}>
                {temperature.toFixed(0)}°
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
                {summary}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                {currentDate}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    Wind:  {wind.speed} m/s
                </Typography>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    {wind.angle}°
                </Typography>
                <Typography variant="body2">
                    {wind.dir}
                </Typography>
            </Box>
        </Box>
    );
}

export default DailyCard;




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
