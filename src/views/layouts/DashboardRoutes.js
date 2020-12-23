import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Loader from '../components/common/Loader';
import RouteMap from '../../constants/RouteMap';

const InventoryContainer = loadable(() => import('../pages/inventory'), { fallback: <Loader /> });
const CreateInventoryContainer = loadable(() => import('../pages/inventory/CreateProduct'), { fallback: <Loader /> });
const EditInventoryContainer = loadable(() => import('../pages/inventory/EditProduct'), { fallback: <Loader /> });

const PurchaseContainer = loadable(() => import('../pages/purchase'), { fallback: <Loader /> });
const CreatePurchaseContainer = loadable(() => import('../pages/purchase/CreatePurchase'), { fallback: <Loader /> });
const EditPurchaseContainer = loadable(() => import('../pages/purchase/EditPurchase'), { fallback: <Loader /> });

const InventoryRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={url} exact component={InventoryContainer} />
    <Route path={RouteMap.Inventory.create} exact component={CreateInventoryContainer} />
    <Route path={RouteMap.Inventory.edit()} exact component={EditInventoryContainer} />

    {/*Redirect*/}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

const PurchaseRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={url} exact component={PurchaseContainer} />
    <Route path={RouteMap.Purchase.create} exact component={CreatePurchaseContainer} />
    <Route path={RouteMap.Purchase.edit()} exact component={EditPurchaseContainer} />

    {/*Redirect*/}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

const DashboardAdminRoutes = () => (
  <Switch>
    {/* Admin dashboard */}
    <Route path={RouteMap.Purchase.root} component={PurchaseRoutes} />
    <Route path={RouteMap.Inventory.root} component={InventoryRoutes} />

    {/* Redirect */}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

export default DashboardAdminRoutes;
