import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import App from "./components/App/App";
import NotFound from "./components/NotFound/NotFound";

// Variable
const routes = (
    <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={App}/>
        <Route path="*" component={NotFound} />
    </Switch>
);

export default routes;

// https://reedbarger.com/react-router-cheatsheet/
