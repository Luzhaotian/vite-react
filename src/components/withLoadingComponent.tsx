import { Suspense } from 'react';
import SkeletonLoading from '@/views/SkeletonLoading';

const withLoadingComponent = (Comp: JSX.Element) => (
  <Suspense fallback={<SkeletonLoading />}>{Comp}</Suspense>
);

export default withLoadingComponent;
