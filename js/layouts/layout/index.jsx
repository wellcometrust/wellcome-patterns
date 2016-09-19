const React = require('react')

const Layout = React.createClass({
  propTypes: {
    isNarrow: React.PropTypes.bool,
    layoutClass: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getIsNarrow() {
    return this.props.isNarrow ? 'layout--is-gutter-narrow' : ''
  },

  render() {
    return (
      <div className="layout-container">
        <div className={`layout ${this.getIsNarrow()} ${this.props.layoutClass}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Layout
