import PostContainer from "../../containers/post/PostContainer";

function Posts() {
    return (
        <div className='Posts'>
            <h1 className='Posts-title'>Posts</h1>
            <div className='Post-content'>
                <PostContainer/>
            </div>
        </div>
    );
}

export default Posts;