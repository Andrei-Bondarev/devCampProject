import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import AvailableToSelect from "./availableToSelect";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import ModalActivator from "./ModalActivator";
import PropTypes from "prop-types";
import FormAutocomplete from "./FormAutocomplete";
import {useCallback, useState} from "react";
import {postAvatar} from "../../../containers/users/api/crud";
import FormImage from "./FormImage";
import {postPhoto} from "../../../containers/post/api/crud";


const validationSchema = yup.object({
    Title: yup.string('Enter title').required('Title is required'),
    Text: yup.string('Enter text').required('Text is required')
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PostModal(props) {

    //PHOTO
    const [img, setImg] = useState(null);
    const [photo, setPhoto] = useState(null);

    const sendFile = useCallback(async () => {
        try {
            const data = new FormData();
            data.append('photo', img);
            await postPhoto(data, props.userId)
                .then(res => setPhoto(res.data.path))
        } catch (e) {

        }
    }, [img, props.userId])
    const photoUrl = `http://localhost:3200/app/posts/${props.userId}/photo.jpg`
    //PHOTO

    const [availableTo, setAvailableTo] = React.useState(props.postAvailableTo);

    const handleChangeSelect = (event) => {
        setAvailableTo(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            Title: props.title, Text: props.text
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            values.Post_date = new Date(Date.now());
            values.PostID = props.postId;
            values.UserID = 1;
            values.PostStatusID = availableTo;
            console.log(values)
            //props.crudFunc(values);
            handleClose();
        },
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ModalActivator buttonName={props.buttonName} modalType={props.modalType} buttonColor={props.buttonColor}
                            handler={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                        {props.modalType} post
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="Title"
                            name="Title"
                            label="Title"
                            onChange={formik.handleChange}
                            error={formik.touched.Title && Boolean(formik.errors.Title)}
                            helperText={formik.touched.Title && formik.errors.Title}
                            defaultValue={formik.values.Title}
                        />
                        <FormImage avatar={photo} avatarUrl={photoUrl} handleChange={e => setImg(e.target.files[0])}
                                   sendFile={sendFile}/>
                        <TextField
                            fullWidth
                            id="Text"
                            name="Text"
                            label="Text"
                            multiline
                            rows={8}
                            type="textarea"
                            onChange={formik.handleChange}
                            error={formik.touched.Text && Boolean(formik.errors.Text)}
                            helperText={formik.touched.Text && formik.errors.Text}
                            defaultValue={formik.values.Text}
                        />

                        <AvailableToSelect changeHandler={handleChangeSelect} value={availableTo}/>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{props.modalType}</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

PostModal.propTypes = {
    buttonName: PropTypes.string.isRequired,
    modalType: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    crudFunc: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
    postAvailableTo: PropTypes.string.isRequired
}


