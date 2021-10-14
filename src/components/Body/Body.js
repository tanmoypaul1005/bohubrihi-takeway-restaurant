import React from 'react'
import Manu from './Manu'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
export default function Body() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>


                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>


            <Manu></Manu>
        </div>
    )
}
