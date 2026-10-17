import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import '@fontsource-variable/roboto/index.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
