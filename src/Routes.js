import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

class Routes extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/inscription" component={Signup} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;