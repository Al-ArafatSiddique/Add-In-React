/* eslint-disable no-undef */
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ColorRed from "./components/ColorRed";
import ColorYellow from "./components/ColorYellow";
import Header from "./components/Header";

const App = (props) => {
  const isOfficeInitialized = props.isOfficeInitialized;
 
  return(
    <React.Fragment>
      <Header/>
      <Switch>
        
        <Route path='/colorRed'><ColorRed/> </Route>
        <Route path='/colorYellow'><ColorYellow/></Route>
      </Switch>
  
   </React.Fragment>
  )
}
export default App;

