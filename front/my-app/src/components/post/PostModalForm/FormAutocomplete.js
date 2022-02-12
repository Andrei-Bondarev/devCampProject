import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FormAutocomplete = (props) => {
    return (
        <Autocomplete
            disablePortal
            value={props.value}
            onChange={(event, newValue) => {
                props.setValue(newValue);
            }}
            inputValue={props.inputValue}
            onInputChange={(event, newInputValue) => {
                props.setInputValue(newInputValue);
            }}
            id="combo-box-demo"
            options={props.options}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Available to"/>}
        />
    );
}

export default FormAutocomplete;