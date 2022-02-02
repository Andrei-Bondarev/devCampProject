import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UniversitySelect() {
    const [university, setUniversity] = React.useState('None');

    const handleChange = (event) => {
        setUniversity(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">University</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={university}
                    label="university"
                    onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value={'None'}>None</MenuItem>
                    <MenuItem value={'Sumdu'}>Sumdu</MenuItem>
                    <MenuItem value={'Not Sumdu'}>Not Sumdu</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}