import React from "react";
import { Global, css, connect, styled } from "frontity";
import BootstrapCss from "../styles/bootstrap.css";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../../assets/gm_logo.png";
import TextLogo from "../../assets/gm_text_logo.png";

const Header = ({ state }) => {
  return (
    <>
      <Global styles={css(BootstrapCss)} />
      <BrandContainer>
        <StyledLink link="/">
          <TextLogoContainer src={TextLogo} />
          {/* <Title><span>F12</span> by awsm</Title> */}
        </StyledLink>
        <MobileMenu gmLogo={Logo} />
      </BrandContainer>
      <Nav gmLogo={Logo} />
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

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color: var(--black);
  }
`;
