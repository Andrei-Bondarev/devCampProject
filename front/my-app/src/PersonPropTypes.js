import PropTypes from 'prop-types';
import FilePropsType from "./FilePropsType";

const PersonPropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    avatar: PropTypes.shape({
        file: PropTypes.shape(FilePropsType)
    }),
    files: PropTypes.arrayOf(PropTypes.shape(FilePropsType)),
    addrr: PropTypes.shape({
        main: PropTypes.shape({
            line1: PropTypes.string.isRequired,
            line2: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired
        }),
        alt: PropTypes.shape({
            line1: PropTypes.string.isRequired,
            line2: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired
        })
    })
}

export default PersonPropTypes;
