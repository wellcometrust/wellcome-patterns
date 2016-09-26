const React = require('react')

const Row = (props) => (
  <div className={`row ${props.className}`}>
    {props.children}
  </div>
)

Row.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.element
}

module.exports = Row
