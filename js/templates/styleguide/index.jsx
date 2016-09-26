const React = require('react')
const StyleguideSidebar = require('../../styleguide/styleguide-sidebar/index')
const StyleguideMain = require('../../styleguide/styleguide-main/index')

const Styleguide = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
    children: React.PropTypes.object
  },

  getItemsByType(type) {
    return this.props.route.items.filter((item) => {
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
        <StyleguideMain item={this.props.children} />
      </div>
    )
  }
})

module.exports = Styleguide
