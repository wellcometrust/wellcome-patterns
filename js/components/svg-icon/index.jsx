const React = require('react')

const SvgIcon = (props) => (
  <svg className={props.className} aria-hidden>
    <use xlinkHref={`#icon-${props.name}`}></use>
  </svg>
)

SvgIcon.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
}

module.exports = SvgIcon
