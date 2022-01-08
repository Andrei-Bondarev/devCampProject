import Posts from '../../components/body/PostsComponent'
import Profile from "../../components/body/ProfileComponent";
import AddPost from "../../components/body/AddPostComponent";
import './Posts.css'
import './Profile.css'
import './AddPost.css'

function BodyContainer(props) {
    if (props.toRender === 'Posts')
        return (<Posts/>);
    if (props.toRender === 'AddPost')
        return (<AddPost/>);
    if (props.toRender === 'Profile')
        return (<Profile/>);
}

export default BodyContainer;