import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {storeConfiguration} from "./redux/store/storeConfiguration"
import App from './App.jsx'
import './index.css'

ReactDOM.render(

  <Provider store = {storeConfiguration}>

    <BrowserRouter>

      <React.StrictMode>
        <App />
      </React.StrictMode>
      
    </BrowserRouter>

  </Provider>,

  document.getElementById('root')

)