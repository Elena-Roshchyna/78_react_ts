/* eslint-disable react-refresh/only-export-components */
import { Link, useNavigate } from "react-router-dom";

import {
  ButtonWrapper,
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import type { InputContextType, LayoutProps } from "./types";
import LogoImg from "../../assets/avatar.jpg";
import Button from "../Button/Button";
import { createContext, useState } from "react";

export const InputContext = createContext<InputContextType>({
  data: "",
  onDataChange: () => {},
});

function Layout({ children }: LayoutProps) {
  const [inputResult, setInputResult] = useState<string>("");
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <InputContext.Provider
      value={{
        data: inputResult,
        onDataChange: setInputResult,
      }}
    >
      <LayoutComponent>
        <Header>
          <Link to="/">
            <Logo src={LogoImg} />
          </Link>
          <ButtonWrapper>
            <Button name="<---" onClick={onBack} />
          </ButtonWrapper>
          
          <NavContainer>
            {/* Home */}
            <StyledNavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </StyledNavLink>

            {/* LESSONS */}
            <StyledNavLink
              to="/lesson-05"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson05
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-06"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson06
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-07"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson07
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-08"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson08
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-09"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson09
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson10
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-11"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson11
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-12"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson12
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-15"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson15
            </StyledNavLink>

            {/*  HOMEWORKS  */}
            <StyledNavLink
              to="/hw-06"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              HW06
            </StyledNavLink>
            <StyledNavLink
              to="/hw-07"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              HW07
            </StyledNavLink>
            <StyledNavLink
              to="/hw-08"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              HW08
            </StyledNavLink>
            <StyledNavLink
              to="/hw-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              HW10
            </StyledNavLink>




            <StyledNavLink
              to="/users"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Users
            </StyledNavLink>

            <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to="/user-profile/get-profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            User Profile
          </StyledNavLink>

          </NavContainer>
        </Header>

        <Main>{children}</Main>
        <Footer></Footer>
      </LayoutComponent>
    </InputContext.Provider>
  );
}

export default Layout;

