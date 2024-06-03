 
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const regions = [
  "Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", 
  "Valparaíso", "Metropolitana", "O'Higgins", "Maule", "Ñuble", "Biobío", 
  "Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes"
];

const StyledAutocomplete = styled(Autocomplete)`
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .MuiAutocomplete-inputRoot {
      background-color: lightblue;
      font-size: 18px;
    }
  }
`;

const SearchBox = () => {
    return (
        <StyledAutocomplete
            style={{width: '245px', background:'white'}}
            freeSolo
            options={regions}
            renderInput={(params) => (
                <TextField {...params} label="Temperatura en .." variant="outlined" />
            )}
            renderOption={(props, option) => (
                <ListItem {...props} key={option}>
                    <ListItemIcon>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={option} />
                </ListItem>
            )}
        />
    );
}

export default SearchBox;


// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

// const SearchBox = () => {
//     const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    
//     return (
//         <Autocomplete
//             freeSolo
//             options={options}
//             renderInput={(params) => (
//                 <TextField {...params} label="Search" variant="outlined" />
//             )}
//         />
//     );
// }

// export default SearchBox;
