// Header.js
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';  

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <div className="header">
                    <div className="caja caja1">
                        {/* Contenido de la caja 1 */}
                    </div>
                    <div className="col-auto border-right"></div>
                    <div className="caja caja2">
                        {/* Contenido de la caja 2 */}
                    </div>
                    <div className="caja caja3">
                        {/* Contenido de la caja 3 */}
                    </div>
                    <div className="caja caja4">
                        {/* Contenido de la caja 4 */}
                    </div>
                </div>
            </AppBar>
        </Box>
    );
}

export default Header;
