import {getUser} from "./api/crud";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import Profile from "../../components/body/ProfileComponent";

function UserContainer() {
    const userid = useParams();
    const {isFetching, refetch, data} = useQuery('user', () => getUser(userid.id));
    const user = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {user?.map(({
                            Surname,
                            FirstName,
                            Phone,
                            Email,
                            UserID,
                            NameStatusid,
                            PhoneStatusid,
                            EmailStatusid,
                            EducatonStatusid,
                            EducationID
                        }) => (
                <Profile surname={Surname} firstName={FirstName} phone={Phone} email={Email}
                         key={UserID} userId={UserID} nameStatusId={NameStatusid} phoneStatusId={PhoneStatusid}
                         emailStatusId={EmailStatusid} educationStatusId={EducatonStatusid}
                         educationId={EducationID}/>))}
        </div>
    )
}

export default UserContainer;