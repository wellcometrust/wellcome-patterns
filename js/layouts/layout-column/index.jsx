const React = require('react')

const LayoutColumn = (props) => (
  <div className={`layout__column layout__column--${props.number}`}>
    {props.children}
  </div>
)

LayoutColumn.propTypes = {
  children: React.PropTypes.node,
  number: React.PropTypes.string
}

module.exports = LayoutColumn
