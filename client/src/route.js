import React from 'react'
import {BrowseRouter, Route} from 'react-router-dom'
import App from './App'
import Login from './Pages/Login'

const route = () => {
  return (
    <BrowseRouter>
    <div>
    <Route path='/' component={App} />
    <Route path='/login' component={Login} />
    </div>
    </BrowseRouter>
  )
}

export default route