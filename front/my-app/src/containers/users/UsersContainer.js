import {getUsers} from "./api/crud";
import {useQuery} from "react-query";
import User from '../../components/user/UserComponent'

function UsersContainer() {
    const {isFetching, refetch, data} = useQuery('users', () => getUsers());
    const users = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {users?.map(({UserID, Surname, FirstName, Phone, Email}) => (
                <User UserID={UserID} Surname={Surname} FirstName={FirstName} Phone={Phone} Email={Email}
                      key={UserID}/>))}
        </div>
    )
}

export default UsersContainer;