import './assets/scss/App.scss';
import Routers from './router/Router';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  return (
    <div className='App' dir={`${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <HelmetProvider>
        <Routers />
      </HelmetProvider>
    </div>
  );
};  

export default App;
