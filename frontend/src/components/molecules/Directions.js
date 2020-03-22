/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

import { useState, useEffect } from "react";
import { loadModules } from "esri-loader";

const Directions = props => {
   let [directionsWidgetState, setDirectionsWidgetState] = useState(null);
   let [stops, setStops] = useState(null);
   let [viewModel, setViewModel] = useState(null);
   let [stopsLength, setStopsLength] = useState(null);
   let [searchFeature, setSearchFeature] = useState(null);
   let [searchWidgetState, setSearchWidgetState] = useState(null);
   let [searchTermState, setSearchTermState] = useState(null);
   let [resetButtonState, setResetButtonState] = useState(null);

   useEffect(() => {
      loadModules([
         "esri/widgets/Directions",
         "esri/widgets/Directions/DirectionsViewModel",
         "esri/widgets/Search"
      ])
         .then(([Directions, DirectionsViewModel, Search]) => {
            if (props.routeResult && props.routeParams !== null) {
               setStops((stops = props.routeParams.stops.features));
               setStopsLength(
                  (stopsLength = props.routeParams.stops.features.length)
               );
            }
            const searchWidget = new Search({
               view: props.view,
               locationEnabled: false,
               autoSelect: false,
               searchTerm: searchTermState
            });

            setSearchWidgetState((searchWidgetState = searchWidget));

            props.view.ui.add(searchWidgetState, {
               position: "top-left"
            });

            searchWidgetState.on("search-complete", function(event) {
               setSearchFeature(
                  (searchFeature = event.results[0].results[0].feature)
               );
               setSearchTermState((searchTermState = event.searchTerm));
            });
            if (searchWidget.searchTerm === null) {
               searchWidget.searchTerm = searchTermState;
            }
            const directionsWidgetViewModel = new DirectionsViewModel({
               stops: stops
            });

            setViewModel((viewModel = directionsWidgetViewModel));
            console.log(viewModel, "viewModel");

            let directionsWidget = new Directions({
               view: props.view,
               viewModel: viewModel,
               routeServiceUrl:
                  "https://utility.arcgis.com/usrsvcs/appservices/NesphKL9FZ0lG8nW/rest/services/World/Route/NAServer/Route_World"
            });
            setDirectionsWidgetState(
               (directionsWidgetState = directionsWidget)
            );
            props.view.ui.add(directionsWidgetState, {
               position: "top-right"
            });

            if (props.routeParams.stops.features.length >= 2) {
               directionsWidget._handleClearRouteClick = () => {
                  props.routeParams.stops.features.length = 0;
                  props.routeLayer.graphics = null;
                  viewModel.reset();
               };
            }
            if (
               searchFeature !== null &&
               props.routeParams.stops.features.length === 0
            ) {
               props.routeParams.stops.features.push(searchFeature);
            }
            if (stopsLength !== null) {
               props.view.ui.add(directionsWidgetState, {
                  position: "top-right"
               });
            }
         })

         .catch(err => console.error(err));
      return function cleanup() {
         props.view.ui.remove(directionsWidgetState);
         props.view.ui.remove(searchWidgetState);
      };
   }, [props.routeResult, searchTermState, resetButtonState]);

   return null;
};

export default Directions;
