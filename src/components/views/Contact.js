/** @format */

import React from "react";
import MainMenu from "../organisms/MainMenu";
import styled, { css } from "styled-components";
import GlobalStyle from "../../theme/globalStyle";
import { Form, Field } from "react-final-form";
import Button from "../atoms/Button";

const btnDefault = css`
   ${Button("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = Button("#4f93ce", "#285f8f");

const ContactWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(8, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
   box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 1);

   h1 {
      text-align: center;
      color: #222;
   }
   & > div {
      text-align: center;
   }
   a {
      display: block;
      text-align: center;
      color: rgb(15, 15, 15);
   }
   form {
      max-width: 500px;
      margin: 10px auto;
      border: 1px solid #ccc;
      padding: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      background: rgb(1, 127, 38);
      & > div {
         display: flex;
         flex-flow: row nowrap;
         line-height: 2em;
         margin: 5px;
         & > label {
            color: rgb(15, 15, 15);
            width: 110px;
            font-size: 1.2em;
            font-weight: 600;
            line-height: 32px;
         }
         & > input,
         & > textarea {
            flex: 1;
            padding: 3px 5px;
            font-size: 1em;
            margin-left: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
         }
         & > textarea {
            height: 130px;
         }
         & > div {
            margin-left: 16px;
            & > label {
               display: block;
               & > input {
                  margin-right: 3px;
               }
            }
         }
      }
      & > .buttons {
         display: flex;
         flex-flow: row nowrap;
         justify-content: center;
         margin-top: 15px;
      }
      button {
         margin: 0 10px;
         &[type="submit"] {
            ${btnPrimary};
         }
         &[type="button"] {
            ${btnDefault};
         }
      }
   }
   .mainMenu {
      grid-area: 1 / 1 / 8 / 2;
   }
   #content {
      margin-top: 90px;
      grid-area: 2 / 1 / 7 / 9;
      height: 100vh;
   }
`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
   await sleep(300);
};
const Contact = props => {
   return (
      <ContactWrapper id='contact' className='contact'>
         <GlobalStyle />
         <MainMenu className='mainMenu' />

         <div id='content'>
            <Form
               onSubmit={onSubmit}
               render={({ handleSubmit, form, submitting, pristine }) => (
                  <form
                     //  onSubmit={handleSubmit}
                     action='https://formsubmit.io/send/wiktormax2@gmail.com'
                     method='POST'
                  >
                     <input
                        name='_redirect'
                        type='hidden'
                        id='name'
                        value='http://localhost:3000/contact'
                     />

                     <div type='text' name='firstName'>
                        <label>Imię</label>
                        <Field
                           name='firstName'
                           component='input'
                           type='text'
                           placeholder='Imię'
                        />
                     </div>
                     <div name='lastName' type='text'>
                        <label>Nazwisko</label>
                        <Field
                           name='lastName'
                           component='input'
                           type='text'
                           placeholder='Nazwisko'
                        />
                     </div>
                     <div name='e-mail' type='text'>
                        <label>E-mail</label>
                        <Field
                           name='e-mail'
                           component='input'
                           type='text'
                           placeholder='E-mail'
                        />
                     </div>
                     <div name='notes' type='textarea'>
                        <label>Wiadomość</label>
                        <Field
                           name='notes'
                           type='textarea'
                           component='textarea'
                           placeholder='Wiadomość'
                        />
                     </div>
                     <div type='submit' className='buttons'>
                        <button type='submit' disabled={submitting || pristine}>
                           Wyślij
                        </button>
                        <button
                           type='button'
                           onClick={form.reset}
                           disabled={submitting || pristine}
                        >
                           Reset
                        </button>
                     </div>
                  </form>
               )}
            />
         </div>
      </ContactWrapper>
   );
};

export default Contact;
