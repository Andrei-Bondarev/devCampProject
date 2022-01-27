import {getUser} from "./api/crud";
import {useQuery} from "react-query";
import User from '../../components/user/UserComponent'
import {useParams} from "react-router-dom";
import Profile from "../../components/body/ProfileComponent";

function UserContainer() {
    const userid = useParams();
    const {isFetching, refetch, data} = useQuery('user', () => getUser(userid.id));
    const user = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {user?.map(({Surname, FirstName, Phone, Email, UserID}) => (
                <Profile Surname={Surname} FirstName={FirstName} Phone={Phone} Email={Email}
                         key={UserID}/>))}
        </div>
    )
}

export default UserContainer;