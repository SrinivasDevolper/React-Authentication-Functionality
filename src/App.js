import {BrowserRouter, Route, Switch} from 'react-router-dom'

import HomeRoute from './components/Home'

import AboutRoute from './components/About'

import NotFound from './components/NotFound'

import LoginRoute from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => {
  return (
    <div className="bg-container">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/About" component={AboutRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
