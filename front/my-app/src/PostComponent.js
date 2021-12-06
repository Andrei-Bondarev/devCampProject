import post from './post.jpg';

function Post(props) {
   return (
      <div className='Post'>
         <h1>{props.author}</h1>
         <img src={post} className='Post-photo' alt='Me)' />
         <p>
            This is my first post and this is me on the photo)
         </p>
      </div>
   );
}

export default Post;