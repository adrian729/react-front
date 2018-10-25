import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/Home';
import Feature from 'components/Feature';
import C3Example from 'components/C3Example';
import ChartjsExample from 'components/ChartjsExample';
import Signup from 'components/auth/Signup';
import Signin from 'components/auth/Signin';

export default () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/feature" component={Feature} />
                <Route path="/c3" component={C3Example} />
                <Route path="/chartjs" component={ChartjsExample} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
};