import photo from '../../post.jpg'
import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom'
import './user.css'

function User(props) {
    let navigate = useNavigate();
    console.log(props)
    return (
        <div className='User' onClick={() => navigate(`/users/${props.UserID}`)}>
            <div className='User-flex'>
                <div className='User-data'>
                    <div className='User-data-name'> {props.Surname} {props.FirstName}</div>
                    <div className='User-data-phone'>{props.Phone}</div>
                    <div className='User-data-email'>{props.Email}</div>
                </div>
                <img src={photo} alt="photo"/>
            </div>
        </div>
    )
}

User.propTypes = {
    Surname: PropTypes.string.isRequired,
    FirstName: PropTypes.string.isRequired,
    Phone: PropTypes.number.isRequired,
    Email: PropTypes.string.isRequired,
    UserID: PropTypes.number.isRequired
}

export default User