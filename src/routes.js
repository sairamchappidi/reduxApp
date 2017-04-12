/**
 * Created by amuru1 on 2/14/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PointsTable from './container/index.js'


export default (
    <Route path="/" component={App} >
        <IndexRoute component={PointsTable} />
        <Route path="myJSON" component={PointsTable} />
    </Route>
)
