const React = require('react')

const SiteHeader = () => (
  <header className="site-header" role="banner">
    <a className="site-header__logo" href="/">
      <img src="https://wellcomecollection.org/sites/all/themes/col_base/images/wellcomecollection-logo.svg" alt="Wellcome Collection" />
    </a>
    <p className="site-header__strapline">The free destination for the incurably curious</p>
    <button className="site-header__menu-control">Menu</button>
    <nav className="site-nav" aria-hidden="true">
      <ul>
        <li><a href="/visit">Visit us</a>
          <ul className="menu-visit-us"></ul>
        </li>
        <li><a href="/whats-on">Whats on</a>
          <ul className="menu-whats-on"></ul>
        </li>
        <li><a href="/explore">Explore</a>
          <ul className="menu-explore"></ul>
        </li>
        <li><a href="/what-we-do">What we do</a>
          <ul className="menu-what-we-do"></ul>
        </li>
      </ul>
      <form className="site-header__form">
        <input className="site-header__input" placeholder="Search" type="text" name="search" value="" />
        <input className="site-header__input" title="search" type="image" alt="Search" name="submit"
          src="https://wellcomecollection.org/sites/all/themes/col_base/images/search.svg" />
      </form>
    </nav>
  </header>
)

module.exports = SiteHeader
