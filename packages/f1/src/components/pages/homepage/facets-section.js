import React from "react";
import { styled, connect } from "frontity";

let facets = [
  `Property Acquisition and Investment`,
  `Property Revitalization`,
  `Rental Properties`,
];

const FacetsSection = ({ state, dataRetriever, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const indexData = state.source.get("/category/index");
  const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
  const retrieveData = dataRetriever(posts);
  const facetsData = retrieveData("Facets");
  console.log("all facets data", facetsData);
  return (
    <>
      <TitleWrapper>
        <Title>{facetsData.title.rendered}</Title>
      </TitleWrapper>
      <Container>
        {/* {facets.map((facet, index) => { */}
        {/* return ( */}
        <BulletStyling>
          {/* <BulletNum>{`0${index+1}`}</BulletNum>
              <BulletTitle>{facet}</BulletTitle> */}
          <Html2React html={facetsData.content.rendered} />
        </BulletStyling>
        {/* );
        })} */}
      </Container>
    </>
  );
};

const BulletTitle = styled.h1`
  font-family: GTSectraDisplay;
  line-height: 1;
  font-size: 2rem;
  text-align: center;
`;

let BulletStyling = styled.div`
display: flex
flex-direction: column;

p {
  margin: 0 auto;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 2px;
  background: rgba(222,111,58);
  color: white;
  text-align: center;
  font-size: 1.2rem;
}

h1, h2 {
    font-family: GTSectraDisplay;
  line-height: 1;
  font-size: 2rem;
  text-align: center;
  margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}


`;

let BulletNum = styled.div`
margin: 0 auto;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 2px;
background: rgba(222,111,58);
color: white;
text-align: center;
font-size: 1.2rem;
font-weight: bold;
`;

const Container = styled.div`
  padding-top: 3vh;
  width: 70vw;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  // padding: 024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  padding: 4vh 0;
  border-bottom: solid 1px rgba(113, 119, 104);
`;

const Title = styled.h2`
  text-align: center;
  color: rgba(222, 111, 58);
  font-family: "NeueHaasGroteskText Bd";
`;

const PanelText = styled.div`
  // font-family: GTSectraDisplay;
  // line-height: 1.6;
  // font-size: 2.9em;
  // text-align: left;
`;

const Panels = styled.div`
  background-color: rgba(244, 244, 245);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    // justify-content: stretch;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PanelWrapper = styled.div`
  background-color: white;
  padding: 4vw;
  height: auto;
  border: solid 1px rgba(113, 119, 104);
`;

// Connect the Header component to get access to the `state` in it's `props`
export default connect(FacetsSection);
