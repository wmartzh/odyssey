import '@/i18n';
import Layout from '@/layouts/main-layout';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('app.name')}</h1>
    </Layout>
  );
}

export default App;
