import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../assets/gm_logo.png";
import TextLogo from "../assets/gm_text_logo.png";

const Header = ({ state }) => {
  return (
    <>
      {/* <Container> */}
      <StyledLink link="/">
        {/* <Title>{state.frontity.title}</Title> */}
        <TextLogoContainer src={TextLogo} />
      </StyledLink>
      <LogoContainer src={Logo} />
      {/* <Description>{state.frontity.description}</Description>
        <MobileMenu /> */}
      {/* </Container> */}
      {/* <Nav /> */}
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TextLogoContainer = styled.img`
height: 10px;
`;

const LogoContainer = styled.img`
  height: 20px;
`;

const Container = styled.div`
  // width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  // margin-bottom: 16px;
  color: rgba(266, 113, 59, 1);
  text-transform: uppercase;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
