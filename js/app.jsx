// React
const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

// Templates
const Styleguide = require('./templates/styleguide/index')
const Palette = require('./styleguide/palette/styleguide')
const About = require('./styleguide/about/styleguide')

const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Styleguide}>
          <IndexRoute component={About} />
          <Route path="/items/:id" />
          <Route path="/palette" component={Palette} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
