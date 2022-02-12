import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {storeConfiguration} from "./reduxState/storeConfig/storeConfiguration"
import App from './App.jsx'
import './Index.css'

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