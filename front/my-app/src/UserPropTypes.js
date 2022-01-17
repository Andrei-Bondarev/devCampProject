import PropTypes from 'prop-types';
import PersonPropTypes from "./PersonPropTypes";

const UserPropTypes = {
    person: PropTypes.shape(PersonPropTypes),
    friends: PropTypes.arrayOf(PropTypes.shape(PersonPropTypes))
}

export default UserPropTypes;