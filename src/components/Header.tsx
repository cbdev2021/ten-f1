
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from './header/SearchBox';
import Carousel from './header/Carousel';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <div className="header" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="caja caja1">
                        <Typography variant="h6">T°en</Typography>
                    </div>
                    <div className="col-auto border-right"></div>
                    <div className="caja caja2">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className="caja caja3">
                        <SearchBox />
                    </div>
                    <div className="caja caja4">
                        <Carousel />
                    </div>
                </div>
            </AppBar>
        </Box>
    );
}

export default Header;



// // Header.js
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';  

// const Header = () => {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <div className="header">
//                     <div className="caja caja1">
//                         {/* Contenido de la caja 1 */}
//                     </div>
//                     <div className="col-auto border-right"></div>
//                     <div className="caja caja2">
//                         {/* Contenido de la caja 2 */}
//                     </div>
//                     <div className="caja caja3">
//                         {/* Contenido de la caja 3 */}
//                     </div>
//                     <div className="caja caja4">
//                         {/* Contenido de la caja 4 */}
//                     </div>
//                 </div>
//             </AppBar>
//         </Box>
//     );
// }

// export default Header;
