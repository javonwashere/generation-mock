import React, { useState, useCallback } from "react";
import { styled, connect } from "frontity";
import Slide from "./slide";
import { useTransition, animated } from "react-spring";
import "../about.css";
import Condo from "../../../assets/images/condo.jpg";
import Museum from "../../../assets/images/museum.jpg";
import Tuskegee from "../../../assets/images/tuskegee.jpg";


const SlideshowSection = ({ state, dataRetriever, libraries, featuredData }) => {
    const Html2React = libraries.html2react.Component;
    // const indexData = state.source.get("/category/featured");
    // const posts = indexData.items.map(({ type, id }) => state.source[type][id]);
    // console.log("all facets data", posts);
    const posts = featuredData.items.map(({ type, id }) => state.source[type][id]);

    console.log("all featuredData", posts);

    let properties = posts.map((post) => {
        const media = state.source.attachment[post.featured_media];
        return {img: media.source_url, text: post.content.rendered, title: post.title.rendered, excerpt: post.excerpt.rendered}
    })
    console.log("new props", properties)

//   let properties = [
//     {
//       img: Museum,
//       text:
//         "Buildings are deeply emotive structures which form our psyche. People think they're just things they maneuver through, but the makeup of a person is influenced by the nature of spaces.",
//         author: "DAVID A DJAYE"
//     },
//     {
//       img: Condo,
//       text:
//         "Buildings are deeply emotive structures which form our psyche. People think they're just things they maneuver through, but the makeup of a person is influenced by the nature of spaces.",
//         author: "DAVID A DJAYE"
//     },
//     {
//       img: Tuskegee,
//       text:
//         "Buildings are deeply emotive structures which form our psyche. People think they're just things they maneuver through, but the makeup of a person is influenced by the nature of spaces.",
//         author: "DAVID A DJAYE"
//     },
//   ];
  const [property, setProperty] = useState(properties[0]);

  let allProperties = properties.map((property) => {
    return ({ style }) => (
      <animated.div style={{ ...style, position: "relative" }}>
        <Slide
          className="about-person-object"
          property={property}
          Html2React={Html2React}
          handleRightClick={onRightClick}
          handleLeftClick={onLeftClick}
        />
      </animated.div>
    );
  });

  const [index, set] = useState(0);
  const onRightClick = useCallback(
    () => set((state) => (state + 1) % allProperties.length),
    []
  );
  const onLeftClick = useCallback(
    () => set((state) => (state + 1) % allProperties.length),
    []
  );
  const transitions = useTransition(index, (p) => p, {
    leave: { opacity: 0 },
  });

  return (
    <div className="landing-page-slideshow">
      {transitions.map(({ item, props, key }) => {
        const ThisProperty = allProperties[item];
        return <ThisProperty key={key} style={props} />;
      })}
      
    </div>
  );
};


export default connect(SlideshowSection);