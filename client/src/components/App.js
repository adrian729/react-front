import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/Home';
import Feature from 'components/Feature';
import Signup from 'components/auth/Signup';
import Signin from 'components/auth/Signin';

export default () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/feature" component={Feature} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
};