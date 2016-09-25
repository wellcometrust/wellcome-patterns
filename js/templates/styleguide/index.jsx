const React = require('react')
const StyleguideSidebar = require('../../styleguide/styleguide-sidebar/index')
const StyleguideMain = require('../../styleguide/styleguide-main/index')
const EventPromoExample = require('../../components/event-promo/styleguide')
const SampleComponentExample = require('../../components/sample-component/styleguide')
const SideNavExample = require('../../components/side-nav/styleguide')
const Layout_3_9Example = require('../../layouts/layout-3-9/styleguide')
const Layout_12Example = require('../../layouts/layout-12/styleguide')
const Grid_3Example = require('../../grids/grid-3/styleguide')
const Grid_4Example = require('../../grids/grid-4/styleguide')
const EventsPageExample = require('../events-page/styleguide')

const Styleguide = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

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

  getFilteredItems() {
    if (this.props.children) {
      return [this.props.children]
    }

    const itemId = this.props.params.id

    if (!itemId) return this.items

    const itemArray = this.items.filter((item) => {
      return item.styleguide.urlTitle === itemId
    })

    if (itemArray.length < 1) return this.items

    return itemArray
  },

  getItemsByType(type) {
    return this.items.filter((item) => {
      return item.styleguide.type === type
    })
  },

  render() {
    return (
      <div className="styleguide">
        <svg width="0" height="0">
          <symbol id="icon-chevron" className="styleguide__chevron" viewBox="0 0 20 20">
            <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
          </symbol>
        </svg>
        <StyleguideSidebar
          layouts={this.getItemsByType('layout')}
          components={this.getItemsByType('component')}
          grids={this.getItemsByType('grid')}
          templates={this.getItemsByType('template')} />
        <StyleguideMain items={this.getFilteredItems()} />
      </div>
    )
  }
})

module.exports = Styleguide
