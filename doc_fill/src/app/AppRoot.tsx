import { Outlet } from 'react-router-dom';

export const AppRoot = () => {
  return (
    // <PageLayout>
    //   <ScrollToTop />
    <Outlet />
    // </PageLayout>
  );
};
