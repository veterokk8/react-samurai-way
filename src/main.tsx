 import { createRoot } from 'react-dom/client'
import { MainPage } from './MainPage.tsx'
import './index.css'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />)









