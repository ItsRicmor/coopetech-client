import { faHome, faBoxes, faUsers, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import RouteMap from '../constants/RouteMap';

const DashboardRoute = {
  name: 'Dashboard',
  to: RouteMap.Dashboard.root,
  exact: true,
  icon: faHome,
};

const InventoryRoute = {
  name: 'Inventario',
  to: RouteMap.Inventory.root,
  exact: true,
  icon: faBoxes,
  badge: {
    text: `building`,
    color: 'warning',
  },
};

const AssociatesRoute = {
  name: 'Asociados',
  to: RouteMap.Associates.root,
  exact: true,
  icon: faUsers,
  badge: {
    text: `soon`,
    color: 'secondary',
  },
};

const StoreRoute = {
  name: 'Tienda',
  to: RouteMap.Store.root,
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
