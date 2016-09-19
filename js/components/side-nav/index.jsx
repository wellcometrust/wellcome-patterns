const React = require('react')

const SideNav = React.createClass({
  render() {
    return (
      <nav className="side-nav">
        <ul className="side-nav__list">
          <li className="side-nav__item"><a className="side-nav__link" href="#">Exhibitions</a></li>
          <li className="side-nav__item"><a className="side-nav__link" href="#">Events</a></li>
          <li className="side-nav__item"><a className="side-nav__link" href="#">Reading Room</a></li>
          <li className="side-nav__item"><a className="side-nav__link" href="#">Youth and schools events</a></li>
          <li className="side-nav__item"><a className="side-nav__link" href="#">Calendar</a></li>
        </ul>
      </nav>
    )
  }
})

module.exports = SideNav
