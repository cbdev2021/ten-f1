import { Box, Typography } from "@mui/material";
import moment from "moment"; // Importa moment para el manejo de fechas
import AirIcon from '@mui/icons-material/Air';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Current = ({ current }) => {
    const { temperature, summary, wind } = current;

    // Formato de fecha
    // const currentDate = moment().format("DD-MM");
    const currentDate = moment().format("dddd DD [de] MMMM");

    console.log("current");
    console.log(current);

    return (
        <Box
            className="content"
            sx={{
                maxWidth: 275, // Ancho máximo
                maxHeight: 400, // Altura máxima
                borderRadius: 8, // Radio de borde ajustable
                border: "2px solid #ccc", // Color de borde
                padding: 2, // Espacio interno
                background: "linear-gradient(to right, #78a3d1, #dae4e9)",
                // display: "flex",  
                // flexDirection: "column",  
                // justifyContent: 'center',                  
                alignItems: 'center',
                marginTop: '90px',
                marginBottom: '20px',
                '&:hover': {
                    backgroundColor: '#f0f0f0',   
                    cursor: 'pointer',   
                    transform: 'scale(1.01, 1.01 )',
                    // transition: 'background-color 0.7s, transform 0.7s'   
                }
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
            <CalendarMonthIcon style={{ marginRight: '8px',marginBottom: '-5px' }} />
                {currentDate}
            </Typography>

            <Typography variant="h2" sx={{ mb: 1, justifyContent: 'ce' }}>
                {temperature.toFixed(0)}°
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
                {summary}
            </Typography>
            
            <Box  >
                <AirIcon style={{ marginRight: '8px',marginBottom: '-5px' }} />
                {" "+wind.speed} m/s
                {", "+wind.dir}
                {" ("+wind.angle+"°)"}
                
            </Box>
        </Box>
    );
}

export default Current;

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

// const Current = () => {
//     return (
//         <main>
//             <Box className="content">
//                 <h1>Current contain </h1>
//             </Box>
//         </main>
//     );
// }

// export default Current;
