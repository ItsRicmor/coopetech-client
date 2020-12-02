import { faClipboardCheck, faStore, faUsers, faUserLock, faStar, faAddressCard, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

export const ReviewRoutes = {
  name: 'Revisión',
  to: '/admin/reviews',
  exact: true,
  icon: faClipboardCheck,
};

export const ReviewMemberRoutes = {
  name: 'Revisión',
  to: '/member/reviews',
  exact: true,
  icon: faClipboardCheck,
};

export const memberRoutes = {
  name: 'Miembros',
  to: '/admin/members',
  exact: true,
  icon: faUsers,
};

export const UserRoutes = {
  name: 'Usuarios',
  to: '/admin/users',
  exact: true,
  icon: faUserLock,
};

export const LocalRoutes = {
  name: 'Locales',
  to: '/admin/locals',
  exact: true,
  icon: faStore,
};

export const LocalMemberRoutes = {
  name: 'Locales',
  to: '/member/locals',
  exact: true,
  icon: faStore,
};

export const SaleMemberRoutes = {
  name: 'Ventas',
  to: '/member/sale',
  exact: true,
  icon: faStore,
};

export const GaleryRoutes = {
  name: 'Galería',
  to: '/admin/gallery',
  exact: true,
  icon: faPhotoVideo,
  children: [
    {
      to: '/admin/gallery',
      name: 'Ver',
      exact: true,
    },
    { to: '/admin/gallery/add', name: 'Añadir', exact: true },
  ],
};

export const ReservationRoutes = {
  name: 'Reservas',
  to: '/admin/reservations',
  exact: true,
  icon: faAddressCard,
};

export const ActivitiesRoutes = {
  name: 'Actividades',
  to: '/admin/activities',
  exact: true,
  icon: faStar,
};

export default [
  UserRoutes,
  LocalMemberRoutes,
  ReviewMemberRoutes,
  ActivitiesRoutes,
  ReviewRoutes,
  memberRoutes,
  LocalRoutes,
  GaleryRoutes,
  ReservationRoutes,
  SaleMemberRoutes,
];
