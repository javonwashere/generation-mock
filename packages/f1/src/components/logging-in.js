import React, {useEffect} from "react";
import { styled, connect } from "frontity";

const description404 = (
  <>
    Logging In!{" "}
    <span role="img" aria-label="smiling face">
    😃
    </span>
  </>
);

const description = (
  <>
   Welcome, Admin
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  
  const data = state.source.get(state.router.link);

  const title = "Logging in!";
  const title404 = "Logging in! 😃";

  useEffect(() => {
    window.location = state.adminUrl;
  },[])

  return (
    <Container>
      <Title>{data.is404 ? title404 : title}</Title>
      {/* <Description>{data.is404 ? description404 : description}</Description> */}
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
