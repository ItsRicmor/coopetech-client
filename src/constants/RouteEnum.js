const dashboardIndex = '/dashboard';
const DashboardRoutes = {
  Dashboard: dashboardIndex,
  Inventory: `${dashboardIndex}/inventory`,
  Associates: `${dashboardIndex}/associates`,
  Store: `${dashboardIndex}/store`,
};

const RouteEnum = {
  ...DashboardRoutes,
};

export default RouteEnum;
