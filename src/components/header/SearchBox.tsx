import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchBox = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    
    return (
        <Autocomplete
            freeSolo
            options={options}
            renderInput={(params) => (
                <TextField {...params} label="Search" variant="outlined" />
            )}
        />
    );
}

export default SearchBox;
