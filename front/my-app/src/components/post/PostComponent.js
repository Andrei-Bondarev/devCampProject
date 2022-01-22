import post from '../../post.jpg';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <div className='Post'>
            <h1>{props.Title}</h1>
            <img src={post} className='Post-photo' alt='Me)'/>
            <p>
                Post # {props.PostID}
            </p>
        </div>
    );
}

// eslint-disable-next-line react/no-typos
Post.propTypes = {
    Title: PropTypes.string.isRequired,
    PostID: PropTypes.number.isRequired
}
export default Post;