import { routesType } from '@/types/route';

export const menuRoutes: routesType[] = [
  {
    path: '/home',
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    meta: { title: 'About' },
  },
  {
    path: '/page',
    meta: { title: 'Page' },
  },
  {
    path: '/files',
    meta: { title: 'Files' },
  },
  {
    path: '/user',
    meta: { title: 'User' },
    children: [
      {
        path: '/user/menu',
        meta: { title: 'Menu' },
      },
      {
        path: '/user/user-02',
        meta: { title: 'User02' },
      },
      {
        path: '/user/user-03',
        meta: { title: 'User03' },
      },
    ],
  },
  {
    path: '/team',
    meta: { title: 'Team' },
    children: [
      {
        path: '/team/team-01',
        meta: { title: 'Team01' },
      },
      {
        path: '/team/team-02',
        meta: { title: 'Team02' },
      },
    ],
  },
];
