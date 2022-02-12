import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AvailableToSelect(props) {


    return (
        <Box sx={{minWidth: 120}}>
            <FormControl sx={{minWidth: '100px'}}>
                <InputLabel id="demo-simple-select-label">Available to</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label="group"
                    onChange={props.changeHandler}
                    sx={{textAlign: 'center'}}
                    defaultValue={1}
                >
                    <MenuItem value={1}>All</MenuItem>
                    <MenuItem value={2}>Friends</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}