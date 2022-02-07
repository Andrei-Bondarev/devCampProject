import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useFormik} from "formik";
import {Input, Stack, TextField} from "@mui/material";
import AvailableToSelect from "../post/PostModalForm/availableToSelect";
import Box from "@mui/material/Box";
import UniversitySelect from "./UniversitySelect";
import {getUser, updateUser} from "../../containers/users/api/crud";
import PropTypes from 'prop-types';
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

const validationSchema = yup.object({
    FirstName: yup.string('Enter first name').required('First name is required'),
    Surname: yup.string('Enter second name').required('Second name is required'),
    Phone: yup.string()
        .required("This field is Required")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
        )
});

function Profile(props) {

    const Input = styled('input')({
        display: 'none',
    });

    const avatarUrl = `http://localhost:3200/app/${props.userId}/avatar.jpg`

    function stringById(id) {
        return id === 1 ? 'All' : 'Friends';
    }

    const [nameAvailableTo, setNameAvailableTo] = React.useState(stringById(props.nameStatusId));

    const handleChangeSelectName = (event) => {
        setNameAvailableTo(event.target.value);
    };

    const [phoneAvailableTo, setPhoneAvailableTo] = React.useState(stringById(props.phoneStatusId));

    const handleChangeSelectPhone = (event) => {
        setPhoneAvailableTo(event.target.value);
    };

    const [emailAvailableTo, setEmailAvailableTo] = React.useState(stringById(props.emailStatusId));

    const handleChangeSelectEmail = (event) => {
        setEmailAvailableTo(event.target.value);
    };

    const [universityAvailableTo, setUniversityAvailableTo] = React.useState(stringById(props.educationStatusId));

    const handleChangeSelectUniversity = (event) => {
        setUniversityAvailableTo(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            FirstName: props.firstName,
            Surname: props.surname,
            Phone: props.phone,
            Email: props.email,

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            values.NameStatus = nameAvailableTo;
            values.PhoneStatus = phoneAvailableTo;
            values.EmailStatus = emailAvailableTo;
            values.UniversityStatus = universityAvailableTo;
            updateUser(props.userId, values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card sx={{
                minWidth: 275,
                maxWidth: 1400,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '50px',
                paddingTop: '30px'
            }}>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <Box sx={{maxWidth: '1000px'}}>
                            <Typography component="div">
                                <Box sx={{fontSize: 'h6.fontSize', m: 1}}>My profile</Box>
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                marginBottom: '40px'
                            }}>
                                <TextField
                                    fullWidth
                                    id="FirstName"
                                    name="FirstName"
                                    label="First Name"
                                    onChange={formik.handleChange}
                                    error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
                                    helperText={formik.touched.FirstName && formik.errors.FirstName}
                                    sx={{
                                        maxWidth: '400px'
                                    }
                                    }
                                    defaultValue={formik.values.FirstName}
                                />
                                <AvailableToSelect changeHandler={handleChangeSelectName} value={nameAvailableTo}/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                marginBottom: '40px'
                            }}>
                                <TextField
                                    fullWidth
                                    id="Surname"
                                    name="Surname"
                                    label="Surname"
                                    onChange={formik.handleChange}
                                    error={formik.touched.Surname && Boolean(formik.errors.Surname)}
                                    helperText={formik.touched.Surname && formik.errors.Surname}
                                    sx={{
                                        maxWidth: '400px'
                                    }
                                    }
                                    defaultValue={formik.values.Surname}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                marginBottom: '40px'
                            }}>
                                <TextField
                                    fullWidth
                                    id="Phone"
                                    name="Phone"
                                    label="Phone"
                                    onChange={formik.handleChange}
                                    error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                                    helperText={formik.touched.Phone && formik.errors.Phone}
                                    sx={{
                                        maxWidth: '400px'
                                    }
                                    }
                                    defaultValue={formik.values.Phone}
                                />
                                <AvailableToSelect changeHandler={handleChangeSelectPhone} value={phoneAvailableTo}/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                marginBottom: '40px'
                            }}>
                                <TextField
                                    disabled
                                    fullWidth
                                    id="Email"
                                    name="Email"
                                    label="Email"
                                    onChange={formik.handleChange}
                                    error={formik.touched.Email && Boolean(formik.errors.Email)}
                                    helperText={formik.touched.Email && formik.errors.Email}
                                    sx={{
                                        maxWidth: '400px'
                                    }
                                    }
                                    defaultValue={formik.values.Email}
                                />
                                <AvailableToSelect changeHandler={handleChangeSelectEmail} value={emailAvailableTo}/>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                }}>

                                    <UniversitySelect/>
                                    <AvailableToSelect changeHandler={handleChangeSelectUniversity}
                                                       value={universityAvailableTo}/>
                                </Box>
                                <Button sx={{maxHeight: '50px', marginLeft: '900px'}} type='submit'>Save</Button>
                            </Box>
                        </Box>
                        <Box alignItems='center' display='flex' alignContent='center' flexDirection='column'>
                            <Avatar
                                alt="Remy Sharp"
                                src={avatarUrl}
                                sx={{width: 250, height: 250}}
                            />
                            <Box alignItems='center'>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file"/>
                                    <Button variant="contained" component="span">
                                        Загрузить аватар
                                    </Button>
                                </label>
                            </Box>

                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </form>

    );

}

Profile.propTypes = {
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nameStatusId: PropTypes.number.isRequired,
    phoneStatusId: PropTypes.number.isRequired,
    emailStatusId: PropTypes.number.isRequired,
    educationStatusId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
}

export default Profile;