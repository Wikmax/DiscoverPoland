/** @format */

import React from "react";
import { loadModules } from "esri-loader";
import PopupTemplate from "./PopupTemplate";

class Map extends React.Component {
   constructor(props) {
      super(props);
      this.mapRef = React.createRef();
   }
   state = {
      view: null,
      routeLayer: null,
      map: null
   };

   componentDidMount() {
      loadModules(
         [
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/GraphicsLayer",
            "esri/widgets/BasemapToggle",
            "esri/geometry/Extent"
         ],
         { css: false }
      ).then(([ArcGISMap, MapView, GraphicsLayer, BasemapToggle, Extent]) => {
         const routeLayer = new GraphicsLayer();

         const typeSelect = document.getElementById("basemap");
         const options = typeSelect.getElementsByTagName("option");
         let optionsArray = [];
         for (let i = 0; i < options.length; i++) {
            optionsArray.push(options[i]);
         }
         const map = new ArcGISMap({
            basemap: "topo-vector",
            layers: [routeLayer]
         });

         const view = new MapView({
            container: "map",
            map: map,
            center: [21.4, 51.99],
            zoom: 6.9
         });

         view.watch("widthBreakpoint",function(breakpoint){
            switch (breakpoint) {
              case "xsmall":
              // do something
                break;
              case "small":
              case "medium":
              case "large":
              case "xlarge":
              // do something else
                break;
              default:
            }
          });

         view.extent = new Extent({
            xmin: 21.4,
            ymin: 51.99,
            xmax: 21.4,
            ymax: 51.99,
            spatialReference: {
               wkid: 102100
            }
         });
         // view.scale = 24000;
         view.navigation.browserTouchPanEnabled = false;
         let basemapToggle = new BasemapToggle({
            view: view,
            container: typeSelect
         });
         basemapToggle.container.onclick = () => {
            return null;
         };
         optionsArray.map((option, id) => {
            typeSelect.onchange = event => {
               let currentType = event.target.value;
               basemapToggle.container.onclick = () => {
                  basemapToggle.toggle(
                     (basemapToggle.nextBasemap = currentType)
                  );
               };
            };
         });

         this.setState(() => {
            return { view: view, routeLayer: routeLayer, map: map };
         });
      });
   }

   render() {
      if (this.state.view && this.state.routeLayer && this.state.map !== null) {
         return (
            <>
               <PopupTemplate
                  map={this.state.map}
                  view={this.state.view}
                  routeLayer={this.state.routeLayer}
               />
            </>
         );
      } else {
         return null;
      }
   }
}
export default Map;
