import React, { lazy, Suspense } from 'react';

const LazyResidence = lazy(() => import('./Residence'));

const Residence = props => (
  <Suspense fallback={null}>
    <LazyResidence {...props} />
  </Suspense>
);

export default Residence;
