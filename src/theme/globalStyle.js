/** @format */

import { createGlobalStyle } from "styled-components";
import vineBackground from "../assets/vineBackground.png";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Signika:300,600&display=swap&subset=latin-ext');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*,*::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html{
    font-size: 62.5%
}
body{
    line-height: 1;
    margin: 0;
    font-size:1.6rem;
    font-family: 'Signika', sans-serif;
	background: url('${vineBackground}') #039930;
}
.Toaster__alert{
	button{
		padding: 0;
	}
	span{
		font-size: 25px;
	}
}
`;

export default GlobalStyle;
