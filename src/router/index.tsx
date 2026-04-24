import { lazy, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { routesType } from '@/types/route';
import WithLoadingComponent from '@/components/WithLoadingComponent';
import { menuRoutes } from './menuRoutes';
import { Error404, Login, Top } from './lazyComponents';

const componentImports = import.meta.glob<{ default: ComponentType }>('@/views/**/*.tsx');

const componentCache = new Map<string, ComponentType>();

const getComponent = (path: string): ComponentType | null => {
  const cached = componentCache.get(path);
  if (cached) return cached;

  const targetPath = `/src/views${path}.tsx`.toLowerCase();
  const targetPathIndex = `/src/views${path}/index.tsx`.toLowerCase();

  const matchedPath = Object.keys(componentImports).find(
    (key) => key.toLowerCase() === targetPath || key.toLowerCase() === targetPathIndex
  );

  if (!matchedPath) {
    console.warn(`Component not found: ${path}`);
    return null;
  }

  const importFn = componentImports[matchedPath];
  const LazyComponent = lazy(importFn as () => Promise<{ default: ComponentType }>);
  componentCache.set(path, LazyComponent);
  return LazyComponent;
};

const addElements = (routesList: routesType[]): routesType[] => {
  return routesList.map((route) => {
    const Component = getComponent(route.path);
    return {
      ...route,
      element: Component ? WithLoadingComponent(<Component />) : undefined,
      children: route.children ? addElements(route.children) : undefined,
    };
  });
};

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
    element: WithLoadingComponent(<Error404 />),
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
    children: addElements(menuRoutes),
  },
];

export default routes;
