import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize"

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
