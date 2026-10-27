/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  Spinner from "../../../Components/Spinner/Spinner";
import Button from "../../../Components/Button/Button";
import { UserProfileContext } from "../UserProfile";
import { GetProfileWrapper, Title, Message, ErrorMessage } from "./styles";




export function GetProfile() {
const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const { setUser } = useContext(UserProfileContext);

  const fetchUserProfile = async () => {
    setLoading(true);
    setSuccess(false);
    setError(null);
  

  try {
    const response = await axios.get("https://randomuser.me/api/");
    const data = response.data.results[0];


    const userProfile = {
        firstName: data.name.first,
        lastName: data.name.last,
        gender: data.gender,
        email: data.email,
        country: data.location.country,
        phone: data.phone,
    };

  setUser(userProfile);
setSuccess(true);
  } catch (err) {
    setError("Failed to fetch user data. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (

    <GetProfileWrapper>
      <Title>Get Profile Page</Title>
      <Button name="GET USER PROFILE" onClick={fetchUserProfile} />
    
    {/* Если loading === true, показываем спиннер */}
      {loading && <Spinner />}

      {success && (
        <Message>
          Data successfully retrieved<br />
          <Link to="/user-profile/profile" style={{ color: "inherit", fontWeight: "bold", textDecoration: "underline" }}>
            Go to the profile page
          </Link>
          </Message>
          )}
    
    {/* Если произошла ошибка, выводим её текст */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </GetProfileWrapper>
  );
}



export default GetProfile;