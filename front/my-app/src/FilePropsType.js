import PropTypes from 'prop-types';

const FilePropsType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default FilePropsType;