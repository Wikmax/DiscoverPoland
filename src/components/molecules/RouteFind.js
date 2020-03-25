/** @format */

import React from "react";
import { loadModules } from "esri-loader";
import PopupTemplate from "./PopupTemplate";
import Directions from "./Directions";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"
import searchingMap from '../../assets/searching-map.png'

class RouteFind extends React.Component {
   constructor(props) {
      super(props);
      this.mapRef = React.createRef();
   }
   state = {
      popupPoints: null,
      singlePoint: null,
      measureDistanceAction: null,
      routeParams: null,
      routeResult: null
   };

   componentDidMount() {
      loadModules([
         "esri/tasks/RouteTask",
         "esri/tasks/support/RouteParameters",
         "esri/tasks/support/FeatureSet",
      ]).then(
         ([
            RouteTask,
            RouteParameters,
            FeatureSet
         ]) => {
            if (this.props.popupPoint !== undefined || null) {
               this.setState({
                  popupPoints: this.props.popupPoint
               });
            }
            const routeParams = new RouteParameters({
               directionsLanguage: "pl",
               stops: new FeatureSet(),
               outSpatialReference: {
                  wkid: 3857
               },
               returnDirections: true,
               returnRoutes: true
            });
            this.setState({
               routeParams: routeParams
            });
            const measureRoute = () => {
               if (this.state.popupPoints !== null || undefined) {
                  this.state.popupPoints.map((point, id) => {
                     const POINT = point;
                     this.setState({
                        singlePoint: POINT,
                        routeParams: routeParams
                     });
                     if (
                        POINT.uid + 1 === this.props.view.popup.selectedFeature.attributes.OBJECTID
                     ) {
                        this.state.routeParams.stops.features.push(POINT);
                     }
                     return null;
                  });
               }

               const routeTask = new RouteTask({
                  url:
                     "https://utility.arcgis.com/usrsvcs/appservices/NesphKL9FZ0lG8nW/rest/services/World/Route/NAServer/Route_World"
               });

               const routeSymbol = {
                  type: "simple-line",
                  color: [0, 0, 255, 0.5],
                  width: 4
               };
               const showRoute = data => {
                  const routeResult = data.routeResults[0].route;
                  routeResult.symbol = routeSymbol;
                  this.props.routeLayer.add(routeResult);
                  const routeResoults = data.routeResults[0].directions;
                  if (routeResult !== null) {
                     this.setState({ routeResult: routeResoults });
                  }
               };

               if (this.state.routeParams.stops.features.length >= 2) {
                  routeTask.solve(this.state.routeParams).then(showRoute);
               }
               return this.state.routeParams;
            };

            const measureDistanceAction = {
               title: "Wytycz trasę",
               id: "measure-distance",
               image: searchingMap
            };
            this.setState({ measureDistanceAction });

            this.props.view.popup.on("trigger-action", event => {
               if (event.action.id === "measure-distance") {
                  if (measureRoute !== undefined) {
                     measureRoute();
                     console.log(event.target.content.title)
                     toaster.notify(`${event.target.content.title} został dodany`, {
                        duration: 2000
                      });
                  }
               }
            });
         }
      );
   }
   render() {
      if (
         this.props.view &&
         this.props.routeLayer &&
         this.props.map &&
         this.state.measureDistanceAction !== null
      ) {
         return (
            <>
               <PopupTemplate
                  map={this.props.map}
                  view={this.props.view}
                  measureDistanceAction={this.state.measureDistanceAction}
               />
               <Directions
                  routeResult={this.state.routeResult}
                  view={this.props.view}
                  routeParams={this.state.routeParams}
                  map={this.props.map}
                  routeLayer={this.props.routeLayer}
               />
            </>
         );
      } else {
         return null;
      }
   }
}

export default RouteFind;
