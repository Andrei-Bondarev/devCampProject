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
                <User userID={UserID} surname={Surname} firstName={FirstName} phone={Phone} email={Email}
                      key={UserID}/>))}
        </div>
    )
}

export default UsersContainer;