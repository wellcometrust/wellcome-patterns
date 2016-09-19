// React
const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')

// Templates
const Styleguide = require('./templates/styleguide/index')

const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Styleguide}>
          <Route path="/:id" />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
