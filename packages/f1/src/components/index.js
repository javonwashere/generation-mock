import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import GlobalFonts from "../fonts/fonts";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
// import Home from "./home";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import LoggingIn from "./logging-in";
import BootstrapCss from "./styles/bootstrap.css";
import coblocks from "./styles/coblocks.css";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  let link = state.router.link;
  let isLoggingIn = link === "/admin/";
  console.log("state.router", link);
  // Get information about the current URL.
  const data = state.source.get(link);

  data.isLoggingIn = isLoggingIn;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <GlobalFonts />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      {/* <Global styles={css(BootstrapCss)} /> */}
      <Global styles={css(coblocks)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <HomePage when={data.isHome} />
          <List when={data.isArchive} />
          <Jobs when={data.isAwsmJobOpenings} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <LoggingIn when={isLoggingIn} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>{/* <Footer /> */}</FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: rgba(222, 111, 58);
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }

  html {
    animation: zoomInDown ease 1.5s;
  }

  body {
    margin: 0;
    color: var(--bodycolor);
    // font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    //   "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-family: "NeueHaasGroteskText Rg", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
  }
  a,
  a:visited {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }
  p {
    // line-height: 24px;
    // font-size: 18px;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section {
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }

  @keyframes zoomInDown {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 320px) {
    html {
      font-size: 12px;
    }
  }

  @media (min-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    html {
      font-size: 17px;
    }
  }

  @media (min-width: 1280px) {
    html {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    html {
      font-size: 2vw;
    }
  }

  @keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .animate__slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
  // // padding-top: 2.75rem;
  // padding-right: 15px;
  // padding-left: 15px;
  // // padding-bottom: 6.25rem;
  padding: 3vh 2vw;
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  background: var(--brand);
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;