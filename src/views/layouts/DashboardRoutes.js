import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Loader from '../components/common/Loader';
import RouteEnum from '../../constants/RouteEnum';

const InventoryContainer = loadable(() => import('../pages/inventory'), { fallback: <Loader /> });
const CreateInventoryContainer = loadable(() => import('../pages/inventory/CreateProduct'), { fallback: <Loader /> });

const InventoryRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}`} exact component={InventoryContainer} />
    <Route path={`${url}/create`} exact component={CreateInventoryContainer} />
    {/* <Route path={`${url}/edit/:id`} exact component={EditMember} /> */}

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

const DashboardAdminRoutes = () => (
  <Switch>
    {/* Admin dashboard */}
    <Route path={RouteEnum.Inventory} component={InventoryRoutes} />

    {/* Redirect */}
    <Redirect to="/errors/404" />
  </Switch>
);

export default DashboardAdminRoutes;
