const homeRoot = '/';

const homeRoutes = {
  Home: {
    root: homeRoot,
  },
};

const dashboardRoot = '/dashboard';

const dashboardRoutes = {
  Dashboard: {
    root: dashboardRoot,
  },
};

const inventoryRoot = `${dashboardRoot}/inventory`;

const inventoryRoutes = {
  Inventory: {
    root: inventoryRoot,
    create: `${inventoryRoot}/create`,
    edit: (id = ':id') => `${inventoryRoot}/${id}`,
  },
};

const associatesRoot = `${dashboardRoot}/associates`;

const associatesRoutes = {
  Associates: {
    root: associatesRoot,
    create: `${associatesRoot}/create`,
    edit: (id) => `${associatesRoot}/${id}`,
  },
};

const storeRoot = `${dashboardRoot}/store`;

const storeRoutes = {
  Store: {
    root: storeRoot,
  },
};

const errorsRoot = `/errors`;

const errorsRoutes = {
  Errors: {
    root: errorsRoot,
    notFound: `${errorsRoot}/404`,
  },
};

const purchaseRoot = `${dashboardRoot}/purchase`;

const purchaseRoutes = {
  Purchase: {
    root: purchaseRoot,
    create: `${purchaseRoot}/create`,
    edit: (id) => `${associatesRoot}/${id}`,
  },
};

const RouteMap = {
  ...homeRoutes,
  ...dashboardRoutes,
  ...inventoryRoutes,
  ...associatesRoutes,
  ...storeRoutes,
  ...errorsRoutes,
  ...purchaseRoutes,
};

export default RouteMap;
