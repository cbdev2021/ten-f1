import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBox from './header/SearchBox';
import Carousel from './header/Carousel';
import { Divider } from '@mui/material';

interface HeaderProps {
    onPlaceSelected: (place: any) => void; // Especifica el tipo de la función onPlaceSelected
}

// const Header = ({ onPlaceSelected }) => {
const Header: React.FC<HeaderProps> = ({ onPlaceSelected }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <header>
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
                        <div style={{ height: '60px' }} className='divider-hidden'>
                            <Divider orientation="vertical" style={{ backgroundColor: 'white', width: '0.2px' }} />
                        </div>
                        <div className="caja caja3">
                            {/* <SearchBox /> */}
                            <SearchBox onPlaceSelected={onPlaceSelected} /> {/* Paso la función prop onPlaceSelected */}
                        </div>
                        <div className="caja caja4">
                            <Carousel />
                        </div>
                    </div>
                </header>
            </AppBar>
        </Box>
    );
}

export default Header;


// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchBox from './header/SearchBox';
// import Carousel from './header/Carousel';
// import { Divider } from '@mui/material';

// const Header = () => {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <div className="header" style={{ display: 'flex', alignItems: 'center' }}>
//                     <div className="caja caja1">
//                         <Typography variant="h6">T°en</Typography>
//                     </div>
//                     <div className="col-auto border-right"></div>
//                     <div className="caja caja2">
//                         <IconButton edge="start" color="inherit" aria-label="menu">
//                             <MenuIcon />
//                         </IconButton>
//                     </div>
//                     <div style={{ height: '60px' }} className='divider-hidden'>
//                         <Divider orientation="vertical" style={{ backgroundColor: 'white', width: '0.2px' }} />
//                     </div>

//                     <div className="caja caja3">
//                         <SearchBox />
//                     </div>
//                     <div className="caja caja4">
//                         <Carousel />
//                     </div>
//                 </div>
//             </AppBar>
//         </Box>
//     );
// }

// export default Header;



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
