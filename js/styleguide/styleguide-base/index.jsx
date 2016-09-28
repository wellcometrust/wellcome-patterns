const React = require('react')
const StyleguideIcons = require('../../styleguide/styleguide-icons/index')
const StyleguideMain = require('../../styleguide/styleguide-main/index')
const StyleguideSidebar = require('../../styleguide/styleguide-sidebar/index')

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
        <StyleguideIcons />
        <StyleguideSidebar
          blocks={this.getItemsByType('block')}
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
