/** @format */

import locationPointer from "../../assets/locationPointer.png";

const renderer = {
   type: "unique-value",
   field: "Type",
   defaultSymbol: { type: "simple-marker", color: "black", size: 10 },
   uniqueValueInfos: [
      {
         value: "forest",

         symbol: {
            type: "picture-marker",
            url: locationPointer,
            width: "32px",
            height: "32px",
            color: "blue",
            outline: {
               style: "solid",
               color: "yellow"
             },
         }
      },
      {
         value: "cave",
         symbol: {
            type: "simple-marker",
            color: "green",
            size: 10
         }
      },
      {
         value: "history",
         symbol: {
            type: "simple-marker",
            color: "red",
            size: 10
         }
      },
      {
         value: "urban",
         symbol: {
            type: "simple-marker",
            color: "yellow",
            size: 10
         }
      }
   ]
};
export default renderer;
