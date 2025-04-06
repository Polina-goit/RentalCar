import { Suspense } from 'react';
import Loader from '../Loader/Loader.jsx';
import App from '../App.jsx';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <App />
      {children}
    </Suspense>
  );
};

export default Layout;