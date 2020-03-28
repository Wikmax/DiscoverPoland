/** @format */

import React from "react";
import MainMenu from "../organisms/MainMenu";
import styled, { css } from "styled-components";
import GlobalStyle from "../../theme/globalStyle";

const AboutWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(8, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;

   .mainMenu {
      grid-area: 1 / 1 / 8 / 2;
   }
   #content {
      grid-area: 2 / 2 / 7 / 8;
      height: 50vh;
      width: fit-content;
      font-size: 2.1em;
      background: rgba(1, 127, 38, 0.99);
      box-shadow: 13px 13px 30px -10px hsla(0, 0%, 0%, 1);
      p {
         text-indent: 45px;
         text-shadow: black 1px 1px 20px;
      }
   }
`;

const AboutApp = props => {
   return (
      <AboutWrapper id='about' className='about'>
         <GlobalStyle />
         <MainMenu className='mainMenu' />

         <div id='content'>
            <p>
               {" "}
               Aplikacja 'Discover Poland' służy do wyszukiwania ciekawych mało
               znanych miejsc w Polsce. Od opuszczonych zamków i budynków po
               jaskinie i piękne krajobrazy - wszystko to będzie można znaleźć
               tutaj. Strona ma w tym momencie charakter poglądowy i ma za
               zadanie przedstawienie moich możliwość jako programisty. Wszelkie
               błędy i niedociągnięcia będą na bieżąco naprawiane oraz dodawane
               będą nowe funkcjonalności.
            </p>
         </div>
      </AboutWrapper>
   );
};

export default AboutApp;
