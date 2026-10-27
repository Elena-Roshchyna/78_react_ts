import { useContext } from "react";
import { UserProfileContext } from "../UserProfile";
import { ProfileWrapper, Card, Name, InfoBox, EmptyText } from "./styles";


export function Profile() {
    const { user } = useContext(UserProfileContext);


if (!user) {
    return (
      <ProfileWrapper>
        <EmptyText>No profile data available. Please click "GET USER PROFILE" first.</EmptyText>
      </ProfileWrapper>
    );
  }



return (
    <ProfileWrapper>
        <Card>
        <Name>{user.firstName} {user.lastName}.</Name>
        <InfoBox><strong>Gender:</strong> {user.gender}</InfoBox>
        <InfoBox><strong>Email:</strong> {user.email}</InfoBox>
        <InfoBox><strong>Country:</strong> {user.country}</InfoBox>
        <InfoBox><strong>Phone:</strong> {user.phone}</InfoBox>

        </Card>
    </ProfileWrapper>
    );
}



export default Profile;
