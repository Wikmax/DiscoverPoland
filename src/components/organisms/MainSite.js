/** @format */

import React from "react";
import Map from "../molecules/Map";
import MainMenu from "./MainMenu";
import styled, { css } from "styled-components";
import GlobalStyle from "../../theme/globalStyle";
import PointTypeSelect from "../molecules/PointTypeSelect";
import MapTypeSelect from "../molecules/MapTypeSelect";

const MainSiteWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(8, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;

   .mainMenu {
      grid-area: 1 / 1 / 8 / 2;
   }
   .map {
      grid-area: 2 / 3 / 7 / 9;
   }
`;
const StyledWrapper = styled.div`
   min-height: 380px;
   box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
   border-radius: 5px;
   position: relative;
   display: flex;
   margin: 0 auto;
   padding-top: 50px;
   height: 90vh;
   width: 80vw;
   grid-area: 1 / 9 / 1 / 2;

   .mainSite {
      height: 100vh;
   }
   .esri-view-width-less-than-medium .esri-popup__action-text {
      display: block;
      font-size: 10px;
   }
   .esri-popup__action-text {
      overflow: visible;
      text-overflow: ellipsis;
   }
   .esri-view-root {
      margin-top: 40px;
   }
   .esri-directions__stops {
      display: none;
   }
   @media screen and (max-width: 900px) and (max-height: 770px) {
      .esri-component.esri-directions.esri-widget.esri-widget--panel.esri-directions__scroller {
         width: 250px;
         height: 220px;
      }
   }
   .map {
      width: 100%;
      height: 100%;
   }
   .esri-component.esri-search.esri-widget {
      border: 3px black solid;
   }
   .esri-view-user-storage {
      display: flex;
      justify-content: flex-start;
      position: absolute;
      background: transparent;
      width: 100%;
      height: 40px;
   }
   @media screen and (max-width: 900px) and (max-height: 770px) {
      .esri-view-user-storage {
         width: 100%;
         #basemap {
            width: 50%;
         }
         .sc-bxivhb jHKvYb {
            width: 50%;
         }
      }
   }
   .esri-popup__navigation {
      display: none;
   }
   #iconCredit {
      position: fixed;
      top: 90%;
      color: white;
      z-index: 1;
      a {
         color: white;
      }
   }
`;

const MainSite = props => {
   return (
      <MainSiteWrapper id='mainSite' className='mainSite'>
         <GlobalStyle />
         <MainMenu className='mainMenu' />
         <StyledWrapper>
            <p></p>
            <div id='map' className='map'>
               <div className='esri-view-user-storage'>
                  <MapTypeSelect />
                  <PointTypeSelect />
               </div>
               <Map />
            </div>
            <div id='iconCredit'>
               Icons made by{" "}
               <a
                  href='https://www.flaticon.com/authors/freepik'
                  title='Freepik'
               >
                  Freepik
               </a>{" "}
               from{" "}
               <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
               </a>
            </div>
         </StyledWrapper>
      </MainSiteWrapper>
   );
};

export default MainSite;
