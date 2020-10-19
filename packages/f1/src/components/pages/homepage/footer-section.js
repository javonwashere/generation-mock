import React from "react";
import { styled, connect } from "frontity";
import Logo from "../../../assets/logo-white.png";
import Instagram from "../../../assets/insta.png";
import Facebook from "../../../assets/facebook.png";
import LinkedIn from "../../../assets/linkedin.png";

const Footer = ({ state, dataRetriever, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const indexData = state.source.get("/category/index");
  const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
  const retrieveData = dataRetriever(posts);
  const footerData = retrieveData("Social");
  console.log("all footer data", footerData);
  return (
    <FooterWrapper>
      <IconsWrapper>
        <Html2React html={footerData.content.rendered} />
      </IconsWrapper>
      <LogoWrapper src={Logo}></LogoWrapper>
    </FooterWrapper>
  );
};

export default connect(Footer);

const Icon = styled.img`
  height: 20px;
  padding-right: 1vw;
`;

const LogoWrapper = styled.img`
  height: 20px;
  padding: 0vh 2vw;
`;

const IconsWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0vh 2vw;
`;

const FooterWrapper = styled.div`
  z-index: 5000;
  background-color: rgba(134, 119, 104);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  .wp-social-link svg {
    color: white;
    fill: white;
  }
`;
