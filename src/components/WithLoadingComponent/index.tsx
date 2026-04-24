import { Suspense } from 'react';
import SkeletonLoading from '@/views/SkeletonLoading';

const WithLoadingComponent = (Comp: JSX.Element) => (
  <Suspense fallback={<SkeletonLoading />}>{Comp}</Suspense>
);

export default WithLoadingComponent;
