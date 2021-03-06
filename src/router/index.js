import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Company from '../pages/Company';
import Contact from '../pages/Contact';

const Router = () => {
    return (
        <Suspense>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/company'} component={Company} />
                <Route exact path={'/contact'} component={Contact} />
            </Switch>
            <Footer />
        </Suspense>
    );
};

export default Router;
