/** @format */

import React from "react";
import styled, { css } from "styled-components";

const StyledForm = styled.form`
   .multiselect {
      width: 200px;
      position: absolute;
      background: rgb(73, 13, 0);
   }
   .selectBox {
      position: relative;
   }
   .selectBox select {
      width: fit-content;
      height: 40px;
      font-weight: bold;
   }
   .overSelect {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
   }
   #checkboxes {
      display: none;
      border: 1px #dadada solid;
      position: fixed;
      background: rgb(73, 13, 0);
      width: 200px;
      color: white;
   }
   #checkboxes label {
      display: block;
   }
   #checkboxes label:hover {
      background-color: #1e90ff;
   }
`;

class PointTypeSelect extends React.Component {
   constructor(props) {
      super(props);
      this.state = { expanded: false };
   }
   showCheckboxes = () => {
      const checkboxes = document.getElementById("checkboxes");
      if (!this.state.expanded) {
         checkboxes.style.display = "block";
         this.setState({ expanded: true });
      } else {
         checkboxes.style.display = "none";
         this.setState({ expanded: false });
      }
   };
   inputChange = obj => {
      const input = document.getElementsByClassName("input");

      for (let i = 0; i < input.length; i++) {
         input[i].checked = false;
      }
      obj.target.checked = true;
   };

   render() {
      return (
         <StyledForm>
            <div className='multiselect'>
               <div
                  className='selectBox'
                  id='selectBox'
                  onClick={this.showCheckboxes}
               >
                  <select className='overSelect'>
                     <option value='' selected disabled hidden>
                        Wybierz rodzaj punktu na mapie
                     </option>
                  </select>
               </div>
               <div id='checkboxes'>
                  <label htmlFor='one'>
                     <input
                        type='checkbox'
                        data-type='all'
                        id='all'
                        className='input'
                        onChange={this.inputChange}
                     />
                     Wszystkie
                  </label>
                  <label htmlFor='two'>
                     <input
                        type='checkbox'
                        data-type='history'
                        id='history'
                        className='input'
                        onChange={this.inputChange}
                     />
                     Historyczne
                  </label>
                  <label htmlFor='three'>
                     <input
                        type='checkbox'
                        data-type='cave'
                        id='cave'
                        className='input'
                        onChange={this.inputChange}
                     />
                     Jaskinie
                  </label>
                  <label htmlFor='four'>
                     <input
                        type='checkbox'
                        data-type='forest'
                        id='forest'
                        className='input'
                        onChange={this.inputChange}
                     />
                     Lasy
                  </label>
                  <label htmlFor='five'>
                     <input
                        type='checkbox'
                        data-type='urban'
                        id='urban'
                        className='input'
                        onChange={this.inputChange}
                     />
                     Urbex
                  </label>
               </div>
            </div>
         </StyledForm>
      );
   }
}

export default PointTypeSelect;
