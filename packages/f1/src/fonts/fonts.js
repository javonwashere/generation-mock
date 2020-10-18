import { createGlobalStyle } from "styled-components";

import GTSectraDisplayBoldEot from "./GTSectraDisplay-Bold.eot";
import GTSectraDisplayBoldWoff from "./GTSectraDisplay-Bold.woff";
import GTSectraDisplayBoldTtf from "./GTSectraDisplay-Bold.ttf";

import NHaasGroteskTXPro55RgEot from "./NHaasGroteskTXPro-55Rg.eot";
import NHaasGroteskTXPro55RgWoff from "./NHaasGroteskTXPro-55Rg.woff";
import NHaasGroteskTXPro55RgTtf from "./NHaasGroteskTXPro-55Rg.ttf";

import NHaasGroteskTXPro65MdEot from "./NHaasGroteskTXPro-65Md.eot";
import NHaasGroteskTXPro65MdWoff from "./NHaasGroteskTXPro-65Md.woff";
import NHaasGroteskTXPro65MdTtf from "./NHaasGroteskTXPro-65Md.ttf";

import NHaasGroteskTXPro75BdEot from "./NHaasGroteskTXPro-75Bd.eot";
import NHaasGroteskTXPro75BdWoff from "./NHaasGroteskTXPro-75Bd.woff";
import NHaasGroteskTXPro75BdTtf from "./NHaasGroteskTXPro-75Bd.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'GTSectraDisplay';
    src: url(${GTSectraDisplayBoldEot});
    src: url('${GTSectraDisplayBoldEot}?#iefix') format('embedded-opentype'),
        url(${GTSectraDisplayBoldWoff}) format('woff'),
        url(${GTSectraDisplayBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'NeueHaasGroteskText Rg';
    src: url(${NHaasGroteskTXPro55RgEot});
    src: url('${NHaasGroteskTXPro55RgEot}?#iefix') format('embedded-opentype'),
        url('${NHaasGroteskTXPro55RgWoff}') format('woff'),
        url('${NHaasGroteskTXPro55RgTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'NeueHaasGroteskText Md';
    src: url(${NHaasGroteskTXPro65MdEot});
    src: url('${NHaasGroteskTXPro65MdEot}?#iefix') format('embedded-opentype'),
        url('${NHaasGroteskTXPro65MdWoff}') format('woff'),
        url('${NHaasGroteskTXPro65MdTtf}') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'NeueHaasGroteskText Bd';
    src: url(${NHaasGroteskTXPro75BdEot});
    src: url('${NHaasGroteskTXPro75BdEot}?#iefix') format('embedded-opentype'),
        url('${NHaasGroteskTXPro75BdWoff}') format('woff'),
        url('${NHaasGroteskTXPro75BdTtf}') format('truetype');
    font-weight: bold;
    font-style: normal;
}
`;
