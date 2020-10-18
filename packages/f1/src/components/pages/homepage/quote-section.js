import React from "react";
import { styled, connect } from "frontity";
import Link from "../../link";
import Villa from "../../../assets/images/villa_lewaro.jpg";

const Quote = ({ state, action, dataRetriever, libraries }) => {
  const indexData = state.source.get("/category/index");
  const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
  const retrieveData = dataRetriever(posts);
  const panel1 = retrieveData("Quote");
  const media = state.source.attachment[panel1.featured_media];
  console.log(panel1, "FDafsd");
  let gmQuote = {
    text: `“...African Americans saw land ownership as a pathway to independence, and a confirmation of their freedom.”`,
    author: `-ROY W. COPELAND`,
  };

  const Html2React = libraries.html2react.Component;
  state.quote = gmQuote;
  return (
    <QuoteContainer id="quote-section">
      <QuoteWrapper>
        <Html2React html={panel1.content.rendered} />
      </QuoteWrapper>
      <Grid>
        <GridBox1 />
        <GridBox2 />
      </Grid>
      <ImgContainer>
          
        <Img src={media.source_url}/>
        <p style={{ fontSize: "0.5rem" }}>
          {media.alt_text}
        </p>
      </ImgContainer>
    </QuoteContainer>
  );
};

let QuoteWrapper = styled.div`
  padding: 10vh 0;

  h1, h2 {
    font-family: GTSectraDisplay;
    line-height: 1.6;
    font-size: 2rem;
    text-align: center;
    color: rgba(222, 111, 58);
  }

  h4 {
    font-family: "NeueHaasGroteskText Md";
    text-align: center;
    color: rgba(222, 111, 58);
  }
`;

let Img = styled.img`
  width: 100%;
`;



let QuoteTitle = styled.h1`
  font-family: GTSectraDisplay;
  line-height: 1.6;
  font-size: 2rem;
  text-align: center;
  color: rgba(222, 111, 58);
`;

let QuoteAuthor = styled.h4`
  font-family: "NeueHaasGroteskText Md";
  text-align: center;
  color: rgba(222, 111, 58);
`;

let QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5vh;
`;

let ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let Grid = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid rgba(113, 119, 104);
  padding-bottom: 6vh;
`;

let GridBox1 = styled.div`
  width: 50%;
  height: 20vh;
  border-right: 1px solid rgba(113, 119, 104);
`;
let GridBox2 = styled.div`
  width: 50%;
  height: 20vh;
`;

export default connect(Quote);
