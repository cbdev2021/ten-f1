import { Box, Typography } from "@mui/material";
import moment from "moment"; // Importa moment para el manejo de fechas

const DailyCard = ({ current }) => {
    const { temperature, summary, wind } = current;

    // Formato de fecha
    // const currentDate = moment().format("DD-MM");
    const currentDate = moment().format("dddd DD [de] MMMM");

    return (
        <Box
            className="content"
            sx={{
                maxWidth: 300, // Ancho máximo
                maxHeight: 400, // Altura máxima
                borderRadius: 8, // Radio de borde ajustable
                border: "2px solid #ccc", // Color de borde
                padding: 2, // Espacio interno
                background: "linear-gradient(to right, #78a3d1, #dae4e9)",  
                // display: "flex",  
                // flexDirection: "column",  
                // justifyContent: 'flex-start',  
                alignItems: 'center'  
            }}
        >
            <Typography variant="h2" sx={{ mb: 1, justifyContent:'ce' }}>
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
