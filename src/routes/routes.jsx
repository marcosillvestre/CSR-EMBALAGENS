import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutUs } from "../components";
import allPaths from "../constants/paths";
import { Home } from '../containers';
function Routes() {


    return (
        <Router>
            <Switch>

                <Route component={Home} exact path={allPaths.home} />
                <Route component={AboutUs} path={allPaths.aboutUs} />

            </Switch>
        </Router>
    )
}

export default Routes