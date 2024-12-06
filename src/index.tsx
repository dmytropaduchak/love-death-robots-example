import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);
root.render(<App />);
