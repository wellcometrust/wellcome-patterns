const React = require('react')

const Grid = React.createClass({
  propTypes: {
    isNarrow: React.PropTypes.bool,
    gridClass: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },

  getIsNarrow() {
    return this.props.isNarrow ? 'grid--is-gutter-narrow' : ''
  },

  render() {
    return (
      <div className={`grid ${this.getIsNarrow()} ${this.props.gridClass}`}>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Grid
