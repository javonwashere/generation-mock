import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMediaPanel = ({ state, details, libraries, isBottom }) => {
  const media = state.source.attachment[details.featured_media];
  const Html2React = libraries.html2react.Component;

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    // <FeaturedContainer>
    //   <StyledImage
    //     alt={media.title.rendered}
    //     src={media.source_url}
    //     srcSet={srcset}
    //   />
    // </FeaturedContainer>

    <PanelWrapper isBottom={isBottom} url={media.source_url}>
      <PanelImgCaption isBottom={isBottom}>
        <Html2React html={details.content.rendered} />
        <p style={{ fontSize: `1.7rem` }}>{isBottom === true ? `↑` : `↓`}</p>
      </PanelImgCaption>
    </PanelWrapper>
  );
};

export default connect(FeaturedMediaPanel);

const FeaturedContainer = styled.div`
  margin-top: 2rem;
  margin-bottom:2rem;  
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  max-height:400px;
  width: 100%;
  object-fit:cover;
`;

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


