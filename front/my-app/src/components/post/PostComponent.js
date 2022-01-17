import post from '../../post.jpg';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <div className='Post'>
            <h1>{props.author}</h1>
            <img src={post} className='Post-photo' alt='Me)'/>
            <p>
                This is my first post and this is me on the photo)
            </p>
        </div>
    );
}

// eslint-disable-next-line react/no-typos
Post.propTypes = {
    author: PropTypes.string.isRequired
}
export default Post;