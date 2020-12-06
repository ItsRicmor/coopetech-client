import { faHome, faBoxes, faUsers, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import RouteEnum from '../constants/RouteEnum';

const DashboardRoute = {
  name: 'Dashboard',
  to: RouteEnum.Dashboard,
  exact: true,
  icon: faHome,
};

const InventoryRoute = {
  name: 'Inventario',
  to: RouteEnum.Inventory,
  exact: true,
  icon: faBoxes,
  badge: {
    text: `building`,
    color: 'warning',
  },
};

const AssociatesRoute = {
  name: 'Asociados',
  to: RouteEnum.Associates,
  exact: true,
  icon: faUsers,
  badge: {
    text: `soon`,
    color: 'secondary',
  },
};

const StoreRoute = {
  name: 'Tienda',
  to: RouteEnum.Store,
  exact: true,
  icon: faStoreAlt,
  badge: {
    text: `soon`,
    color: 'secondary',
  },
};

// export const GaleryRoutes = {
//   name: 'Galería',
//   to: '/admin/gallery',
//   exact: true,
//   icon: faPhotoVideo,
//   children: [
//     {
//       to: '/admin/gallery',
//       name: 'Ver',
//       exact: true,
//     },
//     { to: '/admin/gallery/add', name: 'Añadir', exact: true },
//   ],
// };

export default [DashboardRoute, InventoryRoute, AssociatesRoute, StoreRoute];
