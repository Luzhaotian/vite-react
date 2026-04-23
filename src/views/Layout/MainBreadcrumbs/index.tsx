import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import routes from '@/router';
import { setBreadcrumbItems } from '@/utils/pages/breadcrumbItems';

const defaultBreadcrumbItems = [
  {
    title: (
      <>
        <HomeOutlined />
        <span style={{ marginLeft: '10px' }}>Home</span>
      </>
    ),
    href: '/',
  },
];

const MainBreadcrumbs = () => {
  const location = useLocation();
  const [secondBreadcrumb, setSecondBreadcrumb] = useState(defaultBreadcrumbItems);

  useEffect(() => {
    const path = location;
    const { children } = routes.find((item) => item.name === 'menuRoutes') ?? {};

    const arr = setBreadcrumbItems(children ?? [], path);

    setSecondBreadcrumb(arr ?? defaultBreadcrumbItems);
  }, [location]);

  return <Breadcrumb items={secondBreadcrumb}></Breadcrumb>;
};

export default MainBreadcrumbs;
