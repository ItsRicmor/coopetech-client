import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Loader from '../components/common/Loader';
import RouteMap from '../../constants/RouteMap';

const InventoryContainer = loadable(() => import('../pages/inventory'), { fallback: <Loader /> });
const CreateInventoryContainer = loadable(() => import('../pages/inventory/CreateProduct'), { fallback: <Loader /> });
const EditInventoryContainer = loadable(() => import('../pages/inventory/EditProduct'), { fallback: <Loader /> });

const InventoryRoutes = () => (
  <Switch>
    <Route path={RouteMap.Inventory.root} exact component={InventoryContainer} />
    <Route path={RouteMap.Inventory.create} exact component={CreateInventoryContainer} />
    <Route path={RouteMap.Inventory.edit()} exact component={EditInventoryContainer} />

    {/*Redirect*/}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

const DashboardAdminRoutes = () => (
  <Switch>
    {/* Admin dashboard */}
    <Route component={InventoryRoutes} />

    {/* Redirect */}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

export default DashboardAdminRoutes;
