import { menuClick, MenuItem } from '@/types/mainMenu';
import React, { useState, useEffect, useMemo } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuRoutes } from '@/router/menuRoutes';
import { routesType } from '@/types/route';

const iconMapping: Record<string, ReactNode> = {
  Home: <HomeOutlined />,
  About: <PieChartOutlined />,
  Page: <DesktopOutlined />,
  Files: <FileOutlined />,
  User: <UserOutlined />,
  Team: <TeamOutlined />,
};

const getMenuItems = (routeList: routesType[]): MenuItem[] => {
  return routeList.map((route) => {
    const label = route.meta?.title || route.path.split('/').pop() || route.path;
    const icon = iconMapping[label];
    const children = route.children ? getMenuItems(route.children) : undefined;

    return {
      key: route.path,
      icon,
      children,
      label,
    } as MenuItem;
  });
};

const rootSubmenuKeys = menuRoutes.filter((r) => r.children).map((r) => r.path);
const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();

  const items = useMemo(() => getMenuItems(menuRoutes), []);

  const firstOpenKeys = currentRoute.pathname.match(/^\/[\w-]+/)?.[0] ?? '/';
  const [openKeys, setOpenKeys] = useState([firstOpenKeys]);
  // 定义状态current（当前菜单）
  const [current, setCurrent] = useState(currentRoute.pathname);

  useEffect(() => {
    setCurrent(currentRoute.pathname);
  }, [currentRoute]);

  const menuClick: menuClick = (e) => {
    navigateTo(e.key);
  };
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey ?? '') === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      selectedKeys={[current]} // 当前选的 key 这里是处理页面回退高亮
      mode="inline"
      items={items}
      onClick={menuClick}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
};

export default MainMenu;
