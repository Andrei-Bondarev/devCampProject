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
            {posts?.map(({PostID, Title}) => (<Post PostID={PostID} Title={Title} key={PostID}/>))}
        </div>

    );
}

export default PostContainer;