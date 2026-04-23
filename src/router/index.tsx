import { lazy } from 'react';
import Top from '@/views/Layout/Top';
import Login from '@/views/Login';
import { Navigate } from 'react-router-dom';
import { routesType } from '@/types/route';
import withLoadingComponent from '@/components/withLoadingComponent';

const Error404 = lazy(() => import('@/views/Error/404')); // eslint-disable-line react-refresh/only-export-components
const About = lazy(() => import('@/views/About')); // eslint-disable-line react-refresh/only-export-components
const Page = lazy(() => import('@/views/Page')); // eslint-disable-line react-refresh/only-export-components
const Menu = lazy(() => import('@/views/User/Menu')); // eslint-disable-line react-refresh/only-export-components
const User02 = lazy(() => import('@/views/User/User02')); // eslint-disable-line react-refresh/only-export-components
const User03 = lazy(() => import('@/views/User/User03')); // eslint-disable-line react-refresh/only-export-components
const Files = lazy(() => import('@/views/Files')); // eslint-disable-line react-refresh/only-export-components
const Team01 = lazy(() => import('@/views/Team/Team01')); // eslint-disable-line react-refresh/only-export-components
const Team02 = lazy(() => import('@/views/Team/Team02')); // eslint-disable-line react-refresh/only-export-components
const Home = lazy(() => import('@/views/Home')); // eslint-disable-line react-refresh/only-export-components

const routes: routesType[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Top />,
    exact: true,
    name: 'menuRoutes',
    children: [
      {
        path: '/home',
        element: withLoadingComponent(<Home />),
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />),
        meta: {
          title: 'About',
        },
      },
      {
        path: '/page',
        element: withLoadingComponent(<Page />),
        meta: {
          title: 'Page',
        },
      },
      {
        path: '/files',
        element: withLoadingComponent(<Files />),
        meta: {
          title: 'Files',
        },
      },
      {
        path: '/user',
        meta: {
          title: 'User',
        },
        children: [
          {
            path: '/user/menu',
            element: withLoadingComponent(<Menu />),
            meta: {
              title: 'Menu',
            },
          },
          {
            path: '/user/user-02',
            element: withLoadingComponent(<User02 />),
            meta: {
              title: 'User02',
            },
          },
          {
            path: '/user/user-03',
            element: withLoadingComponent(<User03 />),
            meta: {
              title: 'User03',
            },
          },
        ],
      },
      {
        path: '/team',
        meta: {
          title: 'Team',
        },
        children: [
          {
            path: '/team/team-01',
            element: withLoadingComponent(<Team01 />),
            meta: {
              title: 'Team01',
            },
          },
          {
            path: '/team/team-02',
            element: withLoadingComponent(<Team02 />),
            meta: {
              title: 'Team02',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
