import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Game from './pages/Game'
import Landing from './pages/Landing'
import SearchResult from './pages/SearchResult'

/**
 * Component displaying the application
 * @returns the JSX element displaying the component
 */
function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/game/:gameId">
          <Game />
        </Route>
        <Route path="/searchResult/:searchInput">
          <SearchResult />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
