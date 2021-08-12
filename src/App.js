import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import HomeContainer from './containers/HomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import EditUserContainer from './containers/EditUserContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import HelpContainer from './containers/HelpContainer'

export default class App extends Component {
 
 
  render() {
    return (
      <div>
        <NavbarComponent/>
         <JumbotronComponent/>
          <BrowserRouter>
              <Route path="/" exact>
                <HomeContainer/>
              </Route>
              <Route path="/create" exact>
                <CreateUserContainer/>
              </Route>
              <Route path="/edit/:id" exact>
                <EditUserContainer/>
              </Route>
              <Route path="/detail/:id" exact>
                <DetailUserContainer/>
              </Route>
              <Route path="/help" exact>
                <HelpContainer/>
              </Route>
          </BrowserRouter>
      </div>
    )
  }
}
