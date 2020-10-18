import React, { useEffect } from "react";
import { styled, connect } from "frontity";
import Link from "../../link";
import FeaturedMediaPanel from "../../featured-media-panel";
// import Tuskegee from "../../../assets/images/tuskegee.jpg";
// import Museum from "../../../assets/images/museum.jpg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

let heroText = {
  comingSoon: `coming soon oct 2020`,
  welcomeText: `Generation Mock is our stake in the ground`,
  welcomeDesc: `Piecing together the building blocks of wealth for generations to come`,
  scrollDown: `scroll down`,
};

let tuskegeeDetails = {
  // src: Tuskegee,
  data: {
    bottom: false,
    caption: `Tuskegee Institute Students Working on New Building
        Bettmann/Getty Images`,
  },
};

let museumDetails = {
  // src: Museum,
  data: {
    bottom: true,
    caption: `National Museum of African American History and Culture, Washington, D.C. George Rose/Getty Images`,
  },
};

const HeroSection = ({ state, actions, panels, libraries }) => {
  let indexData = state.source.get("/category/index");
  const Html2React = libraries.html2react.Component;

  // useEffect(() => {
  //   actions.source.fetch("/");
  // }, []);

  const dataRetriever = (postsData) => (postTitle) => {
    const introData = postsData.filter(
      (post) =>
        post.title.rendered.includes(postTitle) ||
        post.title.rendered.includes(postTitle.toUpperCase()) ||
        post.title.rendered.includes(postTitle.toLowerCase())
    );
    return introData[0] ? introData[0] : "";
  };

  if (indexData.isReady) {
    const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
    let retrieveData = dataRetriever(posts);

    console.log("ALL POSTS", posts);

    const panel1 = retrieveData("HeroText");
    const panel2 = retrieveData("HeroImage1");
    const panel3 = retrieveData("HeroImage2");

    const allPanels = { panel1, panel2, panel3 };
    return (
      <Panels>
        <PanelStyling1>
          <TextContainer>
            <Html2React html={allPanels.panel1.content.rendered} />
            <ScrollLink to="quote-section" smooth={true} duration={500}>
              <p
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {`scroll down`.toUpperCase()}
              </p>
            </ScrollLink>
          </TextContainer>
        </PanelStyling1>
        <PanelStyling>
          <FeaturedMediaPanel details={panel2} isBottom={false} />
        </PanelStyling>
        <PanelStyling>
          <FeaturedMediaPanel details={panel3} isBottom={true} />
        </PanelStyling>
      </Panels>
    );
  }
  return null;
};

const ImgPanel = ({ panelDetails, isBottomPanel, Html2React, state }) => {
  const id = panelDetails.featured_media;
  const media = state.source.attachment[id];
  let isBottom = isBottomPanel;

  return (
    <PanelWrapper isBottom url={media.source_url}>
      <PanelImgCaption isBottom>
        <Html2React html={allPanels.panel1.content.rendered} />
        <p style={{ fontSize: `1.7rem` }}>{isBottom === true ? `↑` : `↓`}</p>
      </PanelImgCaption>
    </PanelWrapper>
  );
};

const Panel = ({ details, isText }) => {
  if (isText) {
    return (
      <PanelStyling>
        <Text details={details} />
      </PanelStyling>
    );
  } else
    return (
      <PanelStyling>
        <Img details={details} />
      </PanelStyling>
    );
};

const Text = ({ details }) => {
  const { comingSoon, welcomeText, welcomeDesc, scrollDown } = details;
  return (
    <TextContainer>
      <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
        {comingSoon.toUpperCase()}
      </p>
      <WelcomeText>{welcomeText}</WelcomeText>
      <p>{welcomeDesc}</p>
      <ScrollLink to="quote-section" smooth={true} duration={500}>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {scrollDown.toUpperCase()}
        </p>
      </ScrollLink>
    </TextContainer>
  );
};
const Img = ({ details, isBottomPanel }) => {
  let isBottom = isBottomPanel;
  const { data } = details;

  return (
    <PanelWrapper isBottom url={details.src}>
      <PanelImgCaption isBottom>
        <p>{data.caption}</p>
        <p style={{ fontSize: `1.7rem` }}>{isBottom === true ? `↑` : `↓`}</p>
      </PanelImgCaption>
    </PanelWrapper>
  );
};

const PanelImgCaption = styled.div`
  position: absolute;
  background: black;
  background: rgba(0, 0, 0, 0.75);
  color: black;
  opacity: 0;
  width: 100%;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  display: flex;
  justify-content: space-between;
  background-color: rgba(244, 244, 245);
  z-index: 5;
  align-items: center;
  p {
    margin: 1vh 1vw;
  }
`;

const PanelWrapper = styled.div`
  display: block;
  position: relative;
  float: left;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
  height: 100%;
  min-height: 40vh;
  @media (max-width: 500px) {
    min-height: 30vh;
  }
  &:hover ${PanelImgCaption} {
    opacity: 1;
  }

  ${PanelImgCaption} {
    left: 0; 
    ${(props) =>
      props.isBottom
        ? `bottom: -30%; border-top: solid 2px rgba(113, 119, 104);`
        : `top: -30%; border-bottom: solid 2px rgba(113, 119, 104);`}
  }

  &:hover ${PanelImgCaption} {
    left: 0; 
    ${(props) => (props.isBottom ? `bottom: 0%;` : `top: 0%;`)}
  }

  &:before {
    ${(props) =>
      props.isBottom ? `bottom: 10px; left: 10px;` : `top: 10px; left: 10px;`}
    content: "?";
    position: absolute;
    font-weight: 800;
    background: black;
    background: rgba(255,255,255,0.75);
    text-shadow: 0 0 5px white;
    color: black;
    width: 24px;
    height: 24px;
    -webkit-border-radius: 12px;
    -moz-border-radius:    12px;
    border-radius:         12px;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    -moz-transition: all 0.6s ease;
    opacity: 0.75;

    &:hover:before {
      opacity: 0;
    }
`;

const WelcomeText = styled.h2`
  font-family: GTSectraDisplay;
  line-height: 1.6;
  font-size: 2.2rem;
  text-align: left;
`;

const CaptionContainer = styled.div`
  padding: 1vh 1vw;
  display: flex;
  background-color: rgba(244, 244, 245);
  z-index: 5;
`;
const StyledImgWrapper = styled.div``;
const StyledImg = styled.img`
  width: 100%;
  @media (min-width: 801px) {
    height: 80vh;
  }
  object-fit: cover;
`;

const Panels = styled.div`
  background-color: rgba(244, 244, 245);
  display: grid;
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 799px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PanelStyling1 = styled.div`
  border: solid 1px rgba(113, 119, 104);
  display: flex;
  flex-direction: column;

  @media (max-width: 799px) {
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  h2 {
    font-family: GTSectraDisplay;
    line-height: 1.6;
    font-size: 2.2rem;
    text-align: left;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const PanelStyling = styled.div`
  border: solid 1px rgba(113, 119, 104);
  display: flex;
  flex-direction: column;

  @media (max-width: 799px) {
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

const TextContainer = styled.div`
  padding: 2vw;
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 801px) {
    height: 80vh;
  }
`;

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HeroSection);
