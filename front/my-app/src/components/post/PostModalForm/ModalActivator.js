import Button from "@mui/material/Button";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";


export default function ModalActivator(props) {
    if (props.modalType === 'Add')
        return (<Button
            key={props.buttonName}
            onClick={props.handler}
            sx={{my: 2, color: props.buttonColor, display: 'block'}}
        >
            {props.buttonName}
        </Button>)
    else if (props.modalType === 'Edit')
        return (<MenuItem onClick={props.handler}>Edit</MenuItem>)
}

ModalActivator.propTypes = {
    buttonName: PropTypes.string.isRequired,
    modalType: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
}