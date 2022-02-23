import {Input} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";


export default function FormImage(props) {
    return (

        <Box alignItems='center' display='flex' alignContent='center' flexDirection='column'
             marginLeft='300px'>
            <div>
                {
                    props.avatar
                        ? <img src={`${props.avatar}`} alt="" width='500px'/>
                        : <img src={`${props.avatarUrl}`} alt="" width='500px'/>
                }
            </div>
            <Input type="file" onChange={props.handleChange}/>
            <Button onClick={props.sendFile}>save avatar</Button>
        </Box>

    )
}