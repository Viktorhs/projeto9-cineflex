import { createRoot } from 'react-dom/client';
import App from './components/App'
import './CSS/reset.css'

const root = createRoot(document.querySelector('.root'))
root.render(<App />)