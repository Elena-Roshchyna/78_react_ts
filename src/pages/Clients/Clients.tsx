import { Outlet } from "react-router-dom";
import { ClientsPage, TitleBox, StyledLink,  } from "./styles";



function Clients() {
    return (
        <ClientsPage>
            <TitleBox>Clients page</TitleBox>

            <StyledLink to="google">Google</StyledLink>
            <StyledLink to="apple">Apple</StyledLink>
            <StyledLink to="spacex">SpaceX</StyledLink>

        <Outlet />
        </ClientsPage>

    );
}

export default Clients