import React from 'react';
import { Switch, Route } from 'react-router';
import About from './src/components/About'
import Projects from './src/components/Projects'
import Contact from './src/components/Contact'
const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component = { About } />
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact }/>
      <Route path='/' />
    </Switch>

  )
}
export default Routes