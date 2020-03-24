/** @format */
import React from "react";
import RouteFind from "./RouteFind";
import { loadModules } from "esri-loader";
import ExtendInfo from "./ExtendInfo";
import axios from "axios";
import renderer from "../atoms/PopupRenderer.js";

class PopupTemplate extends React.Component {
   constructor(props) {
      super(props);
   }
   state = {
      popupPoint: null,
      type: null,
      objectIdsArray: null,
      popupLayer: null,
      features: null,
      apiPoints: null,
      apiImgages: null,
      infoOpen: false
   };
   onChange = newState => {
      this.setState({ infoOpen: newState });
   };
   async componentDidMount() {
      await axios
         .get("https://discover-poland.herokuapp.com/api/")
         .then(response => {
            this.setState({ apiPoints: response.data.Point });
            this.setState({ apiImgages: response.data.Image });
            console.log(response)
         })
         .catch(error => {
            console.log(error);
         });
      loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
         const expand = attributes => {
            this.setState({ features: attributes });
            this.setState({ infoOpen: true });
         };
         const expandAction = {
            title: "Informacje",
            id: "expand_action"
         };

         this.props.view.popup.on("trigger-action", event => {
            if (event.action.id === "expand_action") {
               expand(event.target.features[0].attributes);
            }
         });
         const popupWindow = {
            title: "{title}",
            content:
               "<b>Krótki opis:</b> {shortDescription}",
            actions: [this.props.measureDistanceAction, expandAction]
         };
         const featureSet = [];
         this.state.apiPoints.map((point, pointKey) => {
            let POINT = point;

            const features = [
               {
                  geometry: {
                     type: "point",
                     longitude: POINT.longitude,
                     latitude: POINT.latitude,
                     declaredClass: POINT.declaredClass
                  },
                  attributes: {
                     ObjectID: POINT.objectID,
                     Type: POINT.Type,
                     title: POINT.title,
                     longDescription: POINT.longDescription,
                     shortDescription: POINT.shortDescription
                  }
               }
            ];
            featureSet.push(...features);
         });
         const popupLayer = new FeatureLayer({
            title: "popupLayer",
            source: featureSet,
            objectIdField: "OBJECTID",
            outFields: [
               "Type",
               "title",
               "longDescription",
               "shortDescription"
            ],
            fields: [
               {
                  name: "Type",
                  type: "string",
                  alias: "Type"
               },
               {
                  name: "title",
                  type: "string",
                  alias: "title"
               },
               {
                  name: "longDescription",
                  type: "string",
                  alias: "longDescription"
               },
               {
                  name: "shortDescription",
                  type: "string",
                  alias: "shortDescription"
               }
            ],
            renderer: renderer,
            popupTemplate: popupWindow
         });
         this.setState({ popupLayer });
         const checkbox = document.getElementById("checkboxes");
         const input = checkbox.getElementsByTagName("input");
         const allInput = document.getElementById("all");

         let geometryArray = [];
         let inputArray = [];
         for (let i = 0; i < featureSet.length; i++) {
            geometryArray.push(featureSet[i].geometry);
         }
         for (let i = 0; i < input.length; i++) {
            inputArray.push(input[i]);
         }
         if (allInput.checked !== true) {
            allInput.checked = true;
         } else if (allInput.checked === true) {
            this.props.map.add(this.state.popupLayer);
         }
         inputArray.map((point, key) => {
            let objectIdsArray = [];
            input[key].onchange = event => {
               featureSet.forEach(point => {
                  if (
                     point.geometry.declaredClass === event.target.id &&
                     event.target.checked === true
                  ) {
                     objectIdsArray.push(point.attributes.ObjectID + 1);
                     this.setState({ objectIdsArray });
                  }
               });
               this.props.view
                  .whenLayerView(this.state.popupLayer)
                  .then(layerView => {
                     layerView.effect = {
                        filter: {
                           objectIds: objectIdsArray,
                           distance: 1,
                           units: "miles"
                        },
                        excludedEffect: "opacity(0)"
                     };
                  });
               this.props.map.add(this.state.popupLayer);
            };
         });
         this.setState(() => {
            return { popupPoint: [...popupLayer.source.items] };
         });
      });
   }

   render() {
      if (
         this.props.view &&
         this.props.routeLayer &&
         this.props.map &&
         this.state.popupPoint !== null
      ) {
         return (
            <>
               <RouteFind
                  routeLayer={this.props.routeLayer}
                  map={this.props.map}
                  view={this.props.view}
                  popupPoint={this.state.popupPoint}
                  objectIDArray={this.state.objectIDArray}
                  popupLayer={this.state.popupLayer}
               />
               <ExtendInfo
                  infoOpen={this.state.infoOpen}
                  onStateChange={this.onChange}
                  features={this.state.features}
               />
            </>
         );
      } else {
         return null;
      }
   }
}
export default PopupTemplate;
