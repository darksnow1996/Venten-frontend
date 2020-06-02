import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Filters from '../components/filters';
import Owners from '../components/owners';

class Routes extends React.Component{

    render(){

        return (
            <Switch>
                <Route path="/" exact component={Filters} />
                <Route path="/filters/owners/:id" component={Owners} />
            </Switch>
        );
    }
}

export default Routes;