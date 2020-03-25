/** @format */

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Logo } from "../../assets/castleLogo.svg";

const StyledMenu = styled.div`
   .bm-burger-button {
      width: 100px;
      padding: 20px 0 0 5px;
      :hover {
         stroke: rgb(131, 137, 150);
         stroke-width: 10px;
         cursor: pointer;
      }
      button {
         width: 100px !important;
         height: 100px !important;
         padding: 20px 0 0 5px !important;
      }
   }
   .bm-menu-wrap.menu {
      width: 10vw !important;
   }
   @media screen and (max-width: 900px) and (max-height: 770px) {
      font-size: 1px;
      .bm-burger-button {
         width: 60px;
         height: 60px;
         padding: 20px 0 0 5px;
      }
      .bm-menu-wrap.menu {
         width: 35vw !important;
      }
   }

   .bm-item {
      display: grid !important;
   }
`;
const StyledWrapper = styled.div`
   box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 1);
   overflow: hidden;
   position: fixed;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 10vw;
   @media screen and (max-width: 900px) and (max-height: 770px) {
      width: 35vw;
   }
   text-align: center;
   font-size: 25px;
   color: rgb(15, 15, 15);
   background: rgb(1, 68, 33);
   background: linear-gradient(
      90deg,
      rgba(1, 68, 33, 0.9) 0%,
      rgba(1, 127, 38, 0.99) 20%,
      rgba(1, 127, 38, 0.99) 80%,
      rgba(1, 68, 33, 0.9) 100%
   );
   display: grid;
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
   a {
      text-decoration: none;
      color: rgb(15, 15, 15);
   }
   li {
      list-style-type: none;
      cursor: pointer;
      font-weight: 600;
      p {
         :hover {
            border: rgb(131, 137, 150) 1px solid;
            stroke-width: 10px;
            cursor: pointer;
         }
      }
   }

   #logo {
      position: relative;
   }
`;
class MainMenu extends Component {
   render() {
      return (
         <StyledMenu>
            <Menu
               styles={StyledMenu}
               width={"100px"}
               className={"menu"}
               customBurgerIcon={
                  <Logo
                     id='logo'
                     width='55'
                     height='55'
                     fill='rgb(178,30,0)'
                  />
               }
            >
               <StyledWrapper>
                  <li>
                     <Link to='/'>
                        <p>Strona główna</p>
                     </Link>
                  </li>
                  <li>
                     <Link to='/about_app'>
                        <p>O aplikacji</p>
                     </Link>
                  </li>
                  <li>
                     <Link to='/contact'>
                        <p>Kontakt</p>
                     </Link>
                  </li>
               </StyledWrapper>
            </Menu>
         </StyledMenu>
      );
   }
}

export default MainMenu;
