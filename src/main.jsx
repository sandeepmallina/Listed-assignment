import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='84199143606-6gejio2hslth146q6ao0ttle90429gv7.apps.googleusercontent.com'>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Router>
  </GoogleOAuthProvider>
)
