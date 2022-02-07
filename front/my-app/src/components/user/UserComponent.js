import photo from '../../post.jpg'
import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom'
import './user.css'

function User(props) {
    let navigate = useNavigate();
    return (
        <div className='User' onClick={() => navigate(`/users/${props.userID}`)}>
            <div className='User-flex'>
                <div className='User-data'>
                    <div className='User-data-name'> {props.surname} {props.firstName}</div>
                    <div className='User-data-phone'>{props.phone}</div>
                    <div className='User-data-email'>{props.email}</div>
                </div>
                <img src={photo} alt="photo"/>
            </div>
        </div>
    )
}

User.propTypes = {
    surname: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    userID: PropTypes.number.isRequired
}

export default User