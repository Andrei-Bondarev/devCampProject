import avatar from '../../post.jpg'

function Profile() {
    return (
        <div className='Profile'>
            <div className='Profile-container'>
                <div className='Profile-data'>
                    <div className='Username'>Andriy Bondarev</div>
                    <div className='userBirthday'>14.11.2001</div>
                    <div className='userPhone'>06666666</div>
                    <div className='userEmail'>AB@gmail.com</div>
                </div>
                <img className='Profile-avatar' src={avatar} alt="ME"/>

            </div>
        </div>
    );
}

export default Profile;