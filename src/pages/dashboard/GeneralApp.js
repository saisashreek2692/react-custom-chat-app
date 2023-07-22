import React, { Suspense, lazy } from "react";

const Dummy = lazy(() => import("../../components/Dummy"));

const GeneralApp = () => {
  return (
    <>
      <Suspense fallback="Loading.....">
        <Dummy />
      </Suspense>
    </>
  );
};

export default GeneralApp;
