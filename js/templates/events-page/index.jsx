const React = require('react')
const Layout_3_9 = require('../../layouts/layout-3-9/index')
const LayoutColumn = require('../../layouts/layout-column/index')
const Grid_3 = require('../../grids/grid-3/index')
const SideNav = require('../../components/side-nav/index')
const EventPromo = require('../../components/event-promo/index')

const EventsPage = React.createClass({
  propTypes: {
    sideNavItems: React.PropTypes.array,
    events: React.PropTypes.array
  },

  render() {
    return (
      <Layout_3_9 isNarrow>
        <LayoutColumn number="1">
          <SideNav items={this.props.sideNavItems} />
        </LayoutColumn>
        <LayoutColumn number="2">
          <Grid_3 isNarrow>
            {this.props.events.map((event) => {
              return <EventPromo key={event} data={event} />
            })}
          </Grid_3>
        </LayoutColumn>
      </Layout_3_9>
    )
  }
})

module.exports = EventsPage
