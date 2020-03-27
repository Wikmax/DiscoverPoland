/** @format */

import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
   width: 200px;
   height: 40px;
   border-radius: 20px 50px 40px 15px;
   font-weight: 600;
   background: white;
   :hover {
      background: white;
   }
`;

class MapTypeSelect extends React.Component {
   render() {
      return (
         <StyledSelect id='basemap' name='basemap'>
            <option id='choose' value='' selected disabled hidden>
               Rodzaj mapy
            </option>
            <option id='topo' value='topo'>
               Topograficzna
            </option>
            <option id='streets' value='streets'>
               Ulice
            </option>
            <option id='satellite' value='satellite'>
               Satelitarna
            </option>
            <option id='national-geographic' value='national-geographic'>
               National-geographic
            </option>
            <option id='hybrid' value='hybrid'>
               Hybrydowa
            </option>
            <option id='osm' value='osm'>
               OpenStreetMaps
            </option>
            <option id='terrain' value='terrain'>
               Terenowa
            </option>
         </StyledSelect>
      );
   }
}

export default MapTypeSelect;
