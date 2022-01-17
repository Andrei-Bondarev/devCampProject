import './Header.css'
import {useState} from "react";
import BodyContainer from '../body/BodyContainer';
import PropTypes from 'prop-types';
import FilePropsType from "../../FilePropsType";
import UserPropTypes from "../../UserPropTypes";

const Components = {
    Posts: 'Posts',
    AddPost: 'AddPost',
    Profile: 'Profile'
}

function HeaderContainer(props) {
    const [content, setContent] = useState(props.startpage);
    const HeaderButtonHandler = () => (Component) => {
        setContent(Component);
    }
    console.log(props.user);
    return (
        <div className='wrapper'>
            <header className='Header'>
                <div className='Header-button'>
                    <button onClick={HeaderButtonHandler(Components.Posts)}>
                        Posts
                    </button>
                </div>
                <div className='Header-button'>
                    <button onClick={HeaderButtonHandler(Components.AddPost)}>
                        Add Post
                    </button>
                </div>
                <div className='Header-button'>
                    <button onClick={HeaderButtonHandler(Components.Profile)}>
                        Profile
                    </button>
                </div>
            </header>
            <div className='Main'>
                <BodyContainer toRender={content}/>
            </div>
        </div>
    );
}

HeaderContainer.propTypes = {
    startpage: PropTypes.string.isRequired,
    user: PropTypes.shape(UserPropTypes)
}
export default HeaderContainer;