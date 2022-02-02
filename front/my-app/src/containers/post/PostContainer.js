import './Post.css'
import Post from '../../components/post/PostComponent';
import {getPosts} from "./api/crud";
import {useQuery} from "react-query";

function PostContainer() {
    const {isFetching, refetch, data} = useQuery('posts', () => getPosts());
    const posts = data?.data || [];


    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {posts?.map(({PostID, UserID, Title, Text, Post_date, PostStatusID}) => (
                <Post PostID={PostID} Title={Title} key={PostID} Text={Text} postDate={Post_date} userId={UserID}
                      postAvailableTo={PostStatusID}/>))}
        </div>

    );
}

export default PostContainer;