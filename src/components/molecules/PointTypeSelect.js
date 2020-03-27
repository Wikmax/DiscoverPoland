/** @format */

import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
   width: 200px;
   height: 40px;
   border-radius: 20px 50px 40px 15px;
   font-weight: 600;
   font-size: 14px;
   font-family: "Avenir Next W00", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
   background: white;
   :hover {
      background: white;
   }
`;
class PointTypeSelect extends React.Component {
   constructor(props) {
      super(props);
      this.state = { expanded: false };
   }

   render() {
      return (
         <StyledSelect id='point_type' name='point_type'>
            <option id='choose_point' value='' selected disabled hidden>
               Rodzaj punktu
            </option>
            <option data-type='all' id='all' className='input'>
               Wszystkie
            </option>
            <option data-type='history' id='history' className='input'>
               Historyczne
            </option>
            <option data-type='cave' id='cave' className='input'>
               Jaskinie
            </option>
            <option data-type='natural' id='natural' className='input'>
               Naturalne
            </option>
            <option data-type='urban' id='urban' className='input'>
               Urbex
            </option>
         </StyledSelect>
      );
   }
}

export default PointTypeSelect;
