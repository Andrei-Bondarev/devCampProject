import avatar from '../../post.jpg'
import PropTypes from "prop-types";

function Profile(props) {
    return (
        <div className='Profile'>
            <div className='Profile-container'>
                <div className='Profile-data'>
                    <div className='Username'>{props.Surname} {props.FirstName}</div>
                    <div className='userPhone'>{props.Phone}</div>
                    <div className='userEmail'>{props.Email}</div>
                </div>
                <img className='Profile-avatar' src={avatar} alt="ME"/>

            </div>
        </div>
    );
}

Profile.propTypes = {
    Surname: PropTypes.string.isRequired,
    FirstName: PropTypes.string.isRequired,
    Phone: PropTypes.number.isRequired,
    Email: PropTypes.string.isRequired
}
export default Profile;