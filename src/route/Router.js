import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Home page import
import Home from '../pages/Home';

// Error page import
import NotFound from '../pages/NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;