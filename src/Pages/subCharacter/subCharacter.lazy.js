import React, { lazy, Suspense } from 'react';

const LazySubCharacter = lazy(() => import('./SubCharacter'));

const SubCharacter = props => (
  <Suspense fallback={null}>
    <LazySubCharacter {...props} />
  </Suspense>
);

export default SubCharacter;
