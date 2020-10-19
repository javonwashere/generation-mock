import React from "react";
import { styled, connect } from "frontity";
// import Link from "./link";
import Tuskegee from "../../../assets/images/tuskegee.jpg";
import Museum from "../../../assets/images/museum.jpg";

const grids = [
  {
    title: `The 
    Foundation`,
    text: `The acquisition and investment of Real Estate has been a way of life for the Mock family since 1961 when the patriarch of the family purchased his first house on Center Avenue in a neighborhood known as the Hill District (aka “The Hill”) in Pittsburgh, PA. This neighborhood would later become the infamous setting for a show called Hill Street Blues. 

    After making inroads in other notably white neighborhoods at that time, such as Penn Hills, Mr. and Mrs. Mock began expanding across the Northeast region into Philadelphia and Lancaster, and then headed south into Washington D.C., Maryland, Virginia, and North Carolina. They rehabbed the homes they purchased and rented them to family and other close associates.
    `,
  },
  {
    title: `The 
Significance`,
    text: `Acquiring and holding Real Estate has been cemented as a value for this family. And now we continue to preserve and build this legacy, not just for our family but for US, the collective people who look like us. `,
  },
  {
    title: `The 
    Path Forward`,
    text: `The COVID-19 Pandemic has created a unique opportunity for us to re-evaluate our business model for flexibility and maximum value add. If it wasn’t clear before March 2020, it’s certainly apparent now that one of the leading trends for the Real Estate market is transient housing. More and more, people are opting for the flexibility of short term rentals. Our plan is to meet this need as we discover our sweet spot in terms of our percentage of short term rentals vs long term rentals.`,
  },
];

const GridSection = ({ state, action, dataRetriever, libraries }) => {
  const Html2React = libraries.html2react.Component;
  let title = grids[0].title;
  let text = grids[0].text;
  let splitText = title.split(" ");

  const indexData = state.source.get("/category/index");
  const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
  const retrieveData = dataRetriever(posts);
  const grid1 = retrieveData("The Foundation");
  const grid2 = retrieveData("The Significance");
  const grid3 = retrieveData("The Path Forward");

  console.log(grid1, grid2, grid3);

  let allGrids = [grid1, grid2, grid3];

  const Panel = ({ title, text }) => {
    let splitText = title.split(" ");
    console.log(title, text);
    return (
      <PanelWrapper>
        <PanelTitle>{splitText[0]}</PanelTitle>
        <PanelTitle>{splitText.slice(1).join(" ")}</PanelTitle>
        <PanelText>
          <Html2React html={text.rendered} />
        </PanelText>
      </PanelWrapper>
    );
  };

  let Grids = allGrids.map((el) => (
    <Panel title={el.title.rendered} text={el.content} />
  ));
  return <Panels>{Grids}</Panels>;
};

const PanelTitle = styled.h1`
  font-family: GTSectraDisplay;
  line-height: 1;
  font-size: 2rem;
  text-align: left;
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
export default connect(GridSection);
