import {useParams} from "react-router-dom";
import PostContainer from "./PostContainer";

function PostValidate() {
    const boolNumber = useParams().id.match(/^\d+$/);
    const boolCapital = useParams().id.match(/^[A-Z]+$/);
    const boolFile = useParams().id.match(/^\w+\.(pdf|doc|jpeg)$/);
    const boolDate = useParams().id.match(/^\d{4}-\d{2}-\d{2}$/);
    const urlDate = new Date(useParams().id);
    let boolDateLow;
    if (boolDate && urlDate < Date.now())
        boolDateLow = true;
    else
        boolDateLow = false;
    if (boolNumber || boolCapital || boolDateLow || boolFile)
        return <PostContainer/>;
    return <div>Not Found 404</div>;
}

export default PostValidate;