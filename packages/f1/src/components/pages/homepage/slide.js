import React from "react";
// import Img from 'gatsby-image'
import { styled, connect } from "frontity";
import ArrowLeft from "../../../assets/arrow-left.svg";
import ArrowRight from "../../../assets/arrow-right.svg";
import { Spring } from "react-spring/renderprops-universal";

export default ({ property, handleRightClick, handleLeftClick, Html2React }) => {
  console.log("Show the property", property);

  return (
    <div className="about-person-wrapper">
      <SlideShowWrapper>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <ImgWrapper style={props}>
              <StyledImg src={property.img} />
            </ImgWrapper>
          )}
        </Spring>
        <TextWrapper>
          <TextCaption>
            <Text><Html2React html={property.title} /></Text>
            <Author><Html2React html={property.excerpt} /></Author>
          </TextCaption>
          <Arrows>
            <Arrow onClick={handleLeftClick}>
              <img src={ArrowLeft} />
            </Arrow>
            <Arrow onClick={handleRightClick}>
              <img src={ArrowRight} />
            </Arrow>
          </Arrows>
        </TextWrapper>
      </SlideShowWrapper>
    </div>
  );
};

let Arrows = styled.div`
  display: flex;
  flex-direction: row;
`;
let TextCaption = styled.div`
  color: rgba(222, 111, 58);

`;
let Text = styled.h2`
  font-family: GTSectraDisplay;
  line-height: 1.6;
  font-size: 1.2rem;
  text-align: left;
  color: rgba(222, 111, 58);
`;
let Author = styled.div`
  color: rgba(222, 111, 58);
  letter-spacing: 1px;
  max-height: 30vh;
  overflow: scroll;
`;

let SlideShowWrapper = styled.div`
  // max-height: 30vh;
  @media (min-width: 768px) {
    display: grid;
  }
  grid-template-columns: 2fr 1fr;
  border-top: 1px solid rgba(113, 119, 104);
`;

let ImgWrapper = styled.div`
  padding: 2vw;
`;

let StyledImg = styled.img`
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 1024px) {
    height: 50vh;
  }
  height: 80vh;
  width: 100%;
  object-fit: cover;
`;

let TextWrapper = styled.div`
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(244, 244, 245);
  border-left: 1px solid rgba(113, 119, 104);
`;

let Arrow = styled.div`
  width: 40px;
  padding: 0.5rem;
  margin-top: 1vh;
`;
