// SearchBox.jsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity } from '../../actions/actions'; // Ajusta la ruta según la ubicación real de actions.js
import usePlaceSearch from '../../hooks/usePlaceSearch';

const SearchBox = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector((state:any) => state.cities.selectedCity); // Asegúrate de acceder a cities.selectedCity

    console.log("selectedCity");
    console.log(selectedCity);

    const [inputValue, setInputValue] = useState('');
    const { places, isLoading } = usePlaceSearch(inputValue);

    const handlePlaceSelected = (event, value) => {
        dispatch(selectCity(value)); // Despacha la acción para seleccionar la ciudad
    };

    return (
        <Autocomplete
            style={{ width: '245px', background: 'white', borderRadius: '4px' }}
            options={places}
            autoHighlight
            getOptionLabel={(option) => `${option.name}, ${option.adm_area1}, ${option.country}`}
            onChange={handlePlaceSelected}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            loading={isLoading}
            renderInput={(params) => (
                <React.Fragment>
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Temperatura en .."
                        InputLabelProps={{
                            shrink: false,
                            style: { display: inputValue ? 'none' : 'block' }
                        }}
                        style={{ fontSize: '12px', position: 'relative' }}
                    />
                    {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
                </React.Fragment>
            )}
            renderOption={(props, _option, { index }) => {
                const place = places[index];
                return (
                    <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
                        <ListItemIcon style={{ marginRight: '3px' }}>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={place.name}
                            secondary={`${place.adm_area1}, ${place.country}`}
                            style={{ fontSize: '5px' }}
                        />
                    </ListItem>
                );
            }}
            value={selectedCity} // Mostrar la ciudad seleccionada en Autocomplete
        />
    );
};

export default SearchBox;





// // SearchBox.jsx

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import usePlaceSearch from '../../hooks/usePlaceSearch';

// interface SearchBoxProps {
//     onPlaceSelected: (place: any) => void; // Especifica el tipo de la función onPlaceSelected
// }

// const SearchBox: React.FC<SearchBoxProps> = ({ onPlaceSelected }) => {
//     const [inputValue, setInputValue] = useState('');
//     const { places, isLoading } = usePlaceSearch(inputValue); // Usa el hook usePlaceSearch

//     const handlePlaceSelected = (event, value) => {
//         onPlaceSelected(value); // Llama a la función proporcionada por App
//     };

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             options={places}
//             autoHighlight
//             getOptionLabel={(option) => `${option.name}, ${option.adm_area1}, ${option.country}`}
//             onChange={handlePlaceSelected} // Llama a handlePlaceSelected al seleccionar un lugar
//             inputValue={inputValue}
//             onInputChange={(event, newInputValue ) => setInputValue(newInputValue)}
//             loading={isLoading}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         label="Temperatura en .."
//                         InputLabelProps={{
//                             shrink: false,
//                             style: { display: inputValue ? 'none' : 'block' }
//                         }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => {
//                 const place = places[index];
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '5px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// };

// export default SearchBox;


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';

// interface SearchBoxProps {
//     onPlaceSelected: (place: any) => void; // Especifica el tipo de la función onPlaceSelected
// }

// // const SearchBox = ({ onPlaceSelected }) => {
// const SearchBox: React.FC<SearchBoxProps> = ({ onPlaceSelected }) => {

//     const [inputValue, setInputValue] = useState('');
//     const { data, isLoading } = useFindPlacesQuery(inputValue);
//     const places = data || [];

//     const handlePlaceSelected = (event, value) => {
//         onPlaceSelected(value); // Llama a la función proporcionada por App
//     };

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             options={places}
//             autoHighlight
//             getOptionLabel={(option) => `${option.name}, ${option.adm_area1}, ${option.country}`}
//             onChange={handlePlaceSelected} // Llama a handlePlaceSelected al seleccionar un lugar
//             inputValue={inputValue}
//             onInputChange={(event, newInputValue ) => setInputValue(newInputValue)}
//             loading={isLoading}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         label="Temperatura en .."
//                         InputLabelProps={{
//                             shrink: false,
//                             style: { display: inputValue ? 'none' : 'block' }
//                         }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => {
//                 const place = places[index];
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '5px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// };

// export default SearchBox;


// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';

// const SearchBox = () => {
//     const [selectedPlace, setSelectedPlace] = useState(null);
//     const [inputValue, setInputValue] = useState('');
//     const { data, error, isLoading } = useFindPlacesQuery(inputValue);
//     const places = data || [];

//     console.log("selectedPlace");
//     console.log(selectedPlace);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             options={places}
//             autoHighlight
//             getOptionLabel={(option) => `${option.name}, ${option.adm_area1}, ${option.country}`}
//             onChange={(event, value) => setSelectedPlace(value)}
//             inputValue={inputValue}
//             onInputChange={(event, newInputValue ) => setInputValue(newInputValue)}
//             loading={isLoading}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         label="Temperatura en .."
//                         InputLabelProps={{
//                             shrink: false,
//                             style: { display: inputValue ? 'none' : 'block' }
//                         }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => {
//                 const place = places[index];
//                 console.log("place");
//                 console.log(place);
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '5px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;
 

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';

// const SearchBox = () => {
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [inputValue, setInputValue] = useState('');
//   const { data, error, isLoading } = useFindPlacesQuery(inputValue);

//   const places = data || [];


//   console.log("selectedPlace");
//   console.log(selectedPlace);

//   return (
//     <Autocomplete
//       id="country-select-demo"
//       sx={{ width: 300 }}
//       options={places}
//       autoHighlight
//       getOptionLabel={(option) => `${option.name}, ${option.adm_area1}, ${option.country}`}
//       onChange={(event, value) => setSelectedPlace(value)}
//       inputValue={inputValue}
//       onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
//       loading={isLoading}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Search for a place"
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: 'new-password', // disable autocomplete and autofill
//           }}
//         />
//       )}
//     />
//   );
// }

// export default SearchBox;




// import React, { useState } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [inputValue, setInputValue] = useState('');
//     const { data: places = [], isLoading } = useFindPlacesQuery(inputValue);

//     return (
//         <Autocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={places.map(place => place.name)}
//             loading={isLoading}
//             onInputChange={(event, newInputValue) => {
//                 setInputValue(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     placeholder="Temperatura en ..."
//                     InputProps={{
//                         ...params.InputProps,
//                         endAdornment: (
//                             <React.Fragment>
//                             {isLoading! ? <CircularProgress color="inherit" size={20} /> : null}
//                                 {params.InputProps.endAdornment}
//                             </React.Fragment>
//                         ),
//                     }}
//                 />
//             )}
//             renderOption={(props, option) => (
//                 <ListItem {...props}>
//                     <ListItemIcon>
//                         <LocationOnIcon />
//                     </ListItemIcon>
//                     <ListItemText primary={option} />
//                 </ListItem>
//             )}
//         />
//     );
// }

// export default SearchBox;



// import React, { useState, useEffect } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const [selectedPlace, setSelectedPlace] = useState(null); // State para almacenar la ciudad seleccionada
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     const handleSelectionChange = (_event: any, newValue: React.SetStateAction<null>) => {
//          console.log(_event);
//          console.log(newValue);

//         setSelectedPlace(newValue); // Guardar el lugar seleccionado en la variable
//     };

//     useEffect(() => {
//         console.log("Search text changed:", searchText);
//     }, [searchText]);

//     useEffect(() => {
//         console.log("Loading state changed:", isLoading);
//     }, [isLoading]);
 
//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place) => place.name)}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             onChange={handleSelectionChange} // Maneja el cambio de selección
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => { // Modificado para añadir el índice
//                 const place = places[index]; // Utilizando el índice para obtener el lugar correspondiente
//                 console.log("place");
//                 console.log(place);
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;




// import React, { useState, useEffect } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     useEffect(() => {
//         console.log("Search text changed:", searchText);
//     }, [searchText]);

//     useEffect(() => {
//         console.log("Loading state changed:", isLoading);
//     }, [isLoading]);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place: { name: any; }) => place.name)}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => { // Modificado para añadir el índice
//                 const place = places[index]; // Utilizando el índice para obtener el lugar correspondiente
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;

 
// import React, { useState, useEffect } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     useEffect(() => {
//         console.log("Search text changed:", searchText);
//     }, [searchText]);

//     useEffect(() => {
//         console.log("Loading state changed:", isLoading);
//     }, [isLoading]);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place: { name: any; }) => place.name)}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => { // Modificado para añadir el índice
//                 const place = places[index]; // Utilizando el índice para obtener el lugar correspondiente
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;


// import React, { useState, useEffect } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     useEffect(() => {
//         console.log("Search text changed:", searchText);
//     }, [searchText]);

//     useEffect(() => {
//         console.log("Loading state changed:", isLoading);
//     }, [isLoading]);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place) => ({
//                 ...place, // Conserva todas las propiedades originales
//                 place_id: place.place_id // Agrega place_id a las opciones
//             }))}
//             getOptionLabel={(option) => option.name}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, place) => {
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;




// import React, { useState, useEffect } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     useEffect(() => {
//         console.log("Search text changed:", searchText);
//     }, [searchText]);

//     useEffect(() => {
//         console.log("Loading state changed:", isLoading);
//     }, [isLoading]);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place: { name: any; }) => place.name)}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => { // Modificado para añadir el índice
//                 const place = places[index]; // Utilizando el índice para obtener el lugar correspondiente
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;


// import React, { useState } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     return (
//         <Autocomplete
//             style={{ width: '245px', background: 'white', borderRadius: '4px' }}
//             freeSolo
//             options={places.map((place: { name: any; }) => place.name)}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <React.Fragment>
//                     <TextField
//                         {...params}
//                         variant="outlined"
//                         placeholder="Temperatura en .."
//                         InputLabelProps={{ shrink: false }}
//                         style={{ fontSize: '12px', position: 'relative' }}
//                     />
//                     {isLoading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} />}
//                 </React.Fragment>
//             )}
//             renderOption={(props, _option, { index }) => { // Modificado para añadir el índice
//                 const place = places[index]; // Utilizando el índice para obtener el lugar correspondiente
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={place.name}
//                             secondary={`${place.adm_area1}, ${place.country}`}
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;





// import React, { useState } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     return (
//         <Autocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={places.map(place => place.name)}
//             loading={isLoading}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     placeholder="Temperatura en .."
//                     InputLabelProps={{ shrink: false }}
//                     style={{ fontSize: '12px' }}
//                 />
//             )}
//             renderOption={(props, option) => {
//                 const place = places.find(place => place.name === option);
//                 return (
//                     <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                         <ListItemIcon style={{ marginRight: '3px' }}>
//                             <LocationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText 
//                             primary={place.name} 
//                             secondary={`${place.adm_area1}, ${place.country}`} 
//                             style={{ fontSize: '10px' }}
//                         />
//                     </ListItem>
//                 );
//             }}
//         />
//     );
// }

// export default SearchBox;


// import React, { useState } from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText);

//     return (
//         <Autocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={places.map((place: { name: any; }) => place.name)}
//             loading={isLoading}
//             inputValue={searchText}
//             onInputChange={(_event, newInputValue) => {
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     placeholder="Temperatura en .."
//                     InputLabelProps={{ shrink: false }}
//                     style={{ fontSize: '12px' }} // Tamaño de fuente más pequeño
//                 />
//             )}
//             renderOption={(props, option) => (
//                 <ListItem {...props} style={{ display: 'flex', alignItems: 'center' }}>
//                     <ListItemIcon style={{ marginRight: '3px' }}>
//                         <LocationOnIcon />
//                     </ListItemIcon>
//                     <ListItemText 
//                         primary={option} 
//                         secondary={`${places.find(place => place.name === option)?.region}, ${places.find(place => place.name === option)?.country}`} 
//                         style={{ fontSize: '10px' }} // Tamaño de fuente más pequeño para la región y el país
//                     />
//                 </ListItem>
//             )}
//         />
//     );
// }

// export default SearchBox;


// import React, { useState } from 'react'; // Importamos useState
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const [searchText, setSearchText] = useState(""); // Definimos el estado para el texto de búsqueda
//     const { data: places = [], isLoading } = useFindPlacesQuery(searchText); // Pasamos el texto de búsqueda al hook

//     return (
//         <Autocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={places.map(place => place.name)}
//             loading={isLoading}
//             inputValue={searchText} // Establecemos el valor del input
//             onInputChange={(_event, newInputValue) => { // Actualizamos el texto de búsqueda cuando se escribe en el input
//                 setSearchText(newInputValue);
//             }}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     placeholder="Temperatura en .."
//                     InputLabelProps={{ shrink: false }}
//                 />
//             )}
//             renderOption={(props, option) => (
//                 <ListItem {...props}>
//                     <ListItemIcon>
//                         <LocationOnIcon />
//                     </ListItemIcon>
//                     <ListItemText primary={option} />
//                 </ListItem>
//             )}
//         />
//     );
// }

// export default SearchBox;


// // SearchBox.tsx
// import React from 'react';
// import { useFindPlacesQuery } from '../../slices/weatherApiSlice';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const SearchBox = () => {
//     const { data: places = [], isLoading } = useFindPlacesQuery(""); // No se necesita la variable city aquí

//     return (
//         <Autocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={places.map(place => place.name)}
//             loading={isLoading}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     placeholder="Temperatura en .."
//                     InputLabelProps={{ shrink: false }}
//                 />
//             )}
//             renderOption={(props, option) => (
//                 <ListItem {...props}>
//                     <ListItemIcon>
//                         <LocationOnIcon />
//                     </ListItemIcon>
//                     <ListItemText primary={option} />
//                 </ListItem>
//             )}
//         />
//     );
// }

// export default SearchBox;





// import styled from 'styled-components';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const regions = [
//   "Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", 
//   "Valparaíso", "Metropolitana", "O'Higgins", "Maule", "Ñuble", "Biobío", 
//   "Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes"
// ];

// const StyledAutocomplete = styled(Autocomplete)`
//   @media screen and (min-width: 481px) and (max-width: 768px) {
//     .MuiAutocomplete-inputRoot {
//         //background-color: lightblue;
//         //font-size: 18px;
    
//     }
//   }
// `;

// const SearchBox = () => {
//     return (
//         <StyledAutocomplete
//             style={{width: '245px', background:'white', borderRadius: '4px'}}
//             freeSolo
//             options={regions}
//             renderInput={(params) => (
//                 <TextField
//           {...params}
//           variant="outlined"
//           placeholder="Temperatura en .."
//           InputLabelProps={{ shrink: false }}
//         />
//             )}
//             renderOption={(props, option) => (
//                 <ListItem {...props} key={option}>
//                     <ListItemIcon>
//                         <LocationOnIcon />
//                     </ListItemIcon>
//                     <ListItemText primary={option} />
//                 </ListItem>
//             )}
//         />
//     );
// }

// export default SearchBox;


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
