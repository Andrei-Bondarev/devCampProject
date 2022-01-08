import './Header.css'
import {useState} from "react";
import BodyContainer from '../body/BodyContainer';

function HeaderContainer() {
    const [content, setContent] = useState('Profile');
    return (
        <div className='wrapper'>
            <header className='Header'>
                <div className='Header-button'>
                    <button onClick={() => {
                        setContent('Posts');
                    }}>
                        Posts
                    </button>
                </div>
                <div className='Header-button'>
                    <button onClick={() => {
                        setContent('AddPost')
                    }}>
                        Add Post
                    </button>
                </div>
                <div className='Header-button'>
                    <button onClick={() => {
                        setContent('Profile')
                    }}>
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