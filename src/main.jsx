import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ScrollToTop from './components/scrollTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
    </ScrollToTop>
    </BrowserRouter>
    

  </React.StrictMode>
)

