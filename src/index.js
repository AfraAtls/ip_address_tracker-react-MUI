import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';

const rootReactElement = <App />;
const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);