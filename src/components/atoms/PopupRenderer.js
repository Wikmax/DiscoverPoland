/** @format */
import locationPointerCave from "../../assets/locationPointerCave.png";
import locationPointerNatural from "../../assets/locationPointerNatural.png";
import locationPointerHistory from "../../assets/locationPointerHistory.png";
import locationPointerUrbex from "../../assets/locationPointerUrbex.png";

const renderer = {
   type: "unique-value",
   field: "Type",
   defaultSymbol: { type: "simple-marker", color: "black", size: 10 },
   uniqueValueInfos: [
      {
         value: "natural",

         symbol: {
            type: "picture-marker",
            url: locationPointerNatural,
            width: "32px",
            height: "32px",
            color: "blue",
            outline: {
               style: "solid",
               color: "yellow"
            }
         }
      },
      {
         value: "cave",
         symbol: {
            type: "picture-marker",
            url: locationPointerCave,
            width: "32px",
            height: "32px",
            color: "blue",
            outline: {
               style: "solid",
               color: "yellow"
            }
         }
      },
      {
         value: "history",
         symbol: {
            type: "picture-marker",
            url: locationPointerHistory,
            width: "32px",
            height: "32px",
            color: "blue",
            outline: {
               style: "solid",
               color: "yellow"
            }
         }
      },
      {
         value: "urban",
         symbol: {
            type: "picture-marker",
            url: locationPointerUrbex,
            width: "32px",
            height: "32px",
            color: "blue",
            outline: {
               style: "solid",
               color: "yellow"
            }
         }
      }
   ]
};
export default renderer;
