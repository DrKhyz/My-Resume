import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuBar from './MenuBar.jsx'
import Main from './Main.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import data from './data.json'

const MyRouter = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Switch>
          <Route path="/" exact component={() => <Main infos={data.infos} />} />
          <Route
            path="/resume"
            exact
            component={() => (window.location = data.resume)}
          />
          <Route
            path="/portfolio"
            exact
            component={() => <Portfolio projects={data.projects} />}
          />
          <Route
            path="/linkedIn"
            exact
            component={() => (window.location = data.linkedInUrl)}
          />
          <Route
            path="/github"
            exact
            component={() => (window.location = data.githubUrl)}
          />
          <Route
            path="/resume/contact"
            exact
            component={() => <Contact info={data.contact} />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default MyRouter
