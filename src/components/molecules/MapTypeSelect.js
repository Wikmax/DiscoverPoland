/** @format */

import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
   width: 200px;
   height: 40px;
   background: white;
   :hover{
      background:white;
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
               Topo
            </option>
            <option id='streets' value='streets'>
               Streets
            </option>
            <option id='satellite' value='satellite'>
               Satellite
            </option>
            <option id='hybrid' value='hybrid'>
               Hybrid
            </option>
            <option id='dark-gray' value='dark-gray'>
               Dark-gray
            </option>
            <option id='gray' value='gray'>
               Gray
            </option>
            <option id='national-geographic' value='national-geographic'>
               National-geographic
            </option>
            <option id='hybrid' value='hybrid'>
               Hybrid
            </option>
            <option id='osm' value='osm'>
               OpenStreetMaps
            </option>
            <option id='terrain' value='terrain'>
               Terrain
            </option>
            <option id='streets-vector' value='streets-vector'>
               Streets-vector
            </option>
            <option id='streets-night-vector' value='streets-night-vector'>
               Streets-night-vector
            </option>
            <option
               id='streets-navigation-vector'
               value='streets-navigation-vector'
            >
               Streets-navigation-vector
            </option>
            <option id='streets-relief-vector' value='streets-relief-vector'>
               Streets-relief-vector
            </option>
         </StyledSelect>
      );
   }
}

export default MapTypeSelect;
