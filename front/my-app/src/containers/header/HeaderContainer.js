import './Header.css'
import {useState} from "react";
import BodyContainer from '../body/BodyContainer';

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

export default HeaderContainer;