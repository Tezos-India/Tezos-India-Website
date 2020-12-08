import React from "react";
import { BrowserRouter,Switch, Route } from '../node_modules/react-router-dom';
import DarkTheme from './DarkTheme'
import LightTheme from './LightTheme'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {DarkTheme} />
            <Route path="/tezos-india" exact component = {LightTheme} />
        </Switch>
        </BrowserRouter>
    )
}