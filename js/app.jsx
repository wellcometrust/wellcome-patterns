// React
const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

// Items
const EventPromoExample = require('./components/event-promo/styleguide')
const SampleComponentExample = require('./components/sample-component/styleguide')
const SideNavExample = require('./components/side-nav/styleguide')
const Layout_3_9Example = require('./layouts/layout-3-9/styleguide')
const Layout_12Example = require('./layouts/layout-12/styleguide')
const Grid_3Example = require('./grids/grid-3/styleguide')
const Grid_4Example = require('./grids/grid-4/styleguide')
const EventsPageExample = require('./templates/events-page/styleguide')

// Styleguide
const Styleguide = require('./templates/styleguide/index')
const Palette = require('./styleguide/palette/index')
const About = require('./styleguide/about/index')
const StyleguideItemWrapper = require('./styleguide/styleguide-item-wrapper/index')
const StyleguideGroup = require('./styleguide/styleguide-group/index')

const App = React.createClass({
  items: [
    EventPromoExample,
    SampleComponentExample,
    SideNavExample,
    Layout_3_9Example,
    Layout_12Example,
    Grid_3Example,
    Grid_4Example,
    EventsPageExample
  ],

  getItem(nextState, cb) {
    const item = this.items.filter((item) => {
      return item.styleguide.urlTitle === nextState.params.id
    })

    cb(null, (props) => <StyleguideItemWrapper {...props} item={item[0]} />)
  },

  getType(nextState, cb) {
    const items = this.items.filter((item) => {
      return `${item.styleguide.type.toLowerCase()}s` === nextState.params.type.toLowerCase()
    })

    cb(null, (props) => <StyleguideGroup {...props} items={items} />)
  },

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Styleguide} items={this.items}>
          <IndexRoute component={About} />
          <Route path="/palette" component={Palette} />
          <Route path="/:type" getComponent={this.getType} />
          <Route path="/items/:id" getComponent={this.getItem} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
