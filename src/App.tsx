import '@/i18n';
import Layout from '@/layouts/main-layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
