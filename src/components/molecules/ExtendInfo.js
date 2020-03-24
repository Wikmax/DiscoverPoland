/** @format */

import React from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { animateScroll } from "react-scroll";
import compassExit from "../../assets/compassExit.svg";

const StyledWrapper = styled.div`
   width: 100%;
   height: 100vh;
   background: rgb(1, 79, 40);
   z-index: 2;
   position: absolute;
   top: 100%;

   #infoModel {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      height: 100%;
   }
   #carousel {
      width: 120%;
      height: 120%;
      grid-area: 4 / 1 / 9 / 4;
      img {
         width: 120%;
         height: 120%;
      }
   }
   #title {
      font-weight: 600;
      font-size: 50px;
      grid-area: 2 / 7 / 3 / 8;
      color: rgb(73, 13, 0);
   }
   #longDescription {
      grid-area: 4 / 5 / 9 / 10;
      word-break: break-all;
      font-size: 2.5vh;
   }
   #close {
      grid-area: 1 / 10 / 1 / 10;
      background: transparent;
      border: none;
      cursor: pointer;
      img {
         width: 100%;
         height: 100%;
      }
   }
   .carousel {
      margin: 0 0 0 15px;
      width: 120%;
      height: 120%;
   }
`;

class ExtendInfo extends React.Component {
   constructor(props) {
      super(props);
      this.mapRef = React.createRef();
   }
   scrollToBottom() {
      animateScroll.scrollToBottom({
         containerId: "infoModel"
      });
   }
   closeInfo = () => {
      this.props.onStateChange(false);
   };

   render() {
      if (this.props.features !== null && this.props.infoOpen === true) {
         this.scrollToBottom();

         return (
            <StyledWrapper>
               {[this.props.features].map((feature, id) => {
                  console.log([feature.imageURL]);
                  return (
                     <>
                        <div id='infoModel' key={id}>
                           <button id='close' onClick={this.closeInfo}>
                              <img src={compassExit} />
                           </button>
                           <p id='title'>{feature.title}</p>
                           <p id='longDescription'>{feature.longDescription}</p>
                           <div id='carousel'>
                              <div>
                                 <img src={feature.imageURL} />
                              </div>
                           </div>
                        </div>
                     </>
                  );
               })}
            </StyledWrapper>
         );
      } else {
         return null;
      }
   }
}
export default ExtendInfo;
