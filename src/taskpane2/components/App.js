/* eslint-disable no-undef */
import * as React from "react";
import ColorRed from "./ColorRed";
import ColorYellow from "./ColorYellow";

const App = (props) => {
  const isOfficeInitialized = props.isOfficeInitialized;
 
  return(
    <React.Fragment>
   {isOfficeInitialized && <ColorYellow/>}
   {isOfficeInitialized && <ColorRed/>}
   </React.Fragment>
  )
}
export default App;

