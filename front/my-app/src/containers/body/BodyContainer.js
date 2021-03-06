import Posts from '../../components/body/PostsComponent'
import Profile from "../../components/body/ProfileComponent";
import AddPost from "../../components/body/AddPostComponent";
import './Posts.css'
import './Profile.css'
import './AddPost.css'
import PostValidate from "../post/PostValidate";
import PropTypes from 'prop-types';

function BodyContainer(props) {
    if (props.toRender === 'Posts')
        return (<Posts/>);
    if (props.toRender === 'AddPost')
        return (<AddPost/>);
    if (props.toRender === 'Profile')
        return (<Profile/>)
    if (props.toRender === 'Post')
        return (<PostValidate/>);
}

BodyContainer.propTypes = {
    toRender: PropTypes.string.isRequired
}

export default BodyContainer;