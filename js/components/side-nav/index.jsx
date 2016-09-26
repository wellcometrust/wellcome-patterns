const React = require('react')

const SideNav = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  render() {
    return (
      <nav className="side-nav">
        <ul className="side-nav__list">
          {this.props.items.map((item) => (
            <li key={item.title} className="side-nav__item">
              <a className="side-nav__link" href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
})

module.exports = SideNav
