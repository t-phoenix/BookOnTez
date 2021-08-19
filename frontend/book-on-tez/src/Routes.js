import React, {Component} from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history'

import Home from "./Home/Home"
import Discover from "./Discover/Discover"
import Organise from "./Organise/Organise"
import MintTickets from "./Organise/MintTickets"
export default class Routes extends Component {
    render() {
        return(
            <Router history= {history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Discover" component={Discover} />
                    <Route path= "/Organise" component={Organise} />
                    <Route path = "/MintTickets" component={MintTickets} />
                </Switch>
            </Router>
        )
    }
}