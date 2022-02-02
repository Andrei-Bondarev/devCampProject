import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostModal from "./Modal";
import {updatePost} from "../../../containers/post/api/crud";
import PropTypes from "prop-types";

const options = [
    'Edit'
];


export default function More(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '11ch',
                    },
                }}
            >
                <MenuItem key={options[0]}>
                    <PostModal buttonName='Edit' modalType='Edit' buttonColor='blue' text={props.text}
                               title={props.title} postId={props.postId} crudFunc={updatePost}
                               postAvailableTo={props.postAvailableTo}/>
                </MenuItem>

            </Menu>
        </div>
    );
}

More.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    postAvailableTo: PropTypes.string.isRequired
}