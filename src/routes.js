import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import App from "./components/App/App";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import Tracking from "./components/Tracking/Tracking";

// Variable
const routes = (
    <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/track" component={Tracking}/>
        <Route exact path="/user" component={Profile}/>
        <Route exact path="/" component={App}/>
        <Route path="*" component={NotFound} />
    </Switch>
);

export default routes;

// https://reedbarger.com/react-router-cheatsheet/
