const React = require('react')

const SiteHeader = React.createClass({
  getInitialState() {
    return {
      isFormActive: false,
      searchText: ''
    }
  },

  propTypes: {
    isOverlayed: React.PropTypes.bool,
    setIsOverlayed: React.PropTypes.func
  },

  handleSearchChange(event) {
    this.setState({searchText: event.target.value})
  },

  toggleSearch(event) {
    event.preventDefault()
    this.setState({isFormActive: !this.state.isFormActive})
    this.refs.inputNode.focus()
  },

  toggleNav(event) {
    event.preventDefault()
    this.props.setIsOverlayed(!this.props.isOverlayed)
  },

  getNavActive() {
    return this.props.isOverlayed ? 'is-active' : ''
  },

  getFormActive() {
    return this.state.isFormActive ? 'is-active' : ''
  },

  render() {
    return (
      <header className="site-header" role="banner">
        <a className="site-header__logo" href="/">
          <img src="https://wellcomecollection.org/sites/all/themes/col_base/images/wellcomecollection-logo.svg" alt="Wellcome Collection" />
        </a>
        <p className="site-header__strapline">The free destination for the incurably curious</p>
        <a href="#" className="site-header__nav-toggle" onClick={this.toggleNav}>Menu</a>
        <nav className={`site-header__nav ${this.getNavActive()}`} aria-hidden="true">
          <ul className="site-header__list">
            <li className="site-header__item">
              <a className="site-header__link" href="#">Visit us</a>
            </li>
            <li className="site-header__item is-active">
              <a className="site-header__link" href="#">What&apos;s on</a>
            </li>
            <li className="site-header__item">
              <a className="site-header__link" href="#">Explore</a>
            </li>
            <li className="site-header__item">
              <a className="site-header__link" href="#">What we do</a>
            </li>
          </ul>
          <form className={`site-header__form ${this.getFormActive()}`}>
            <div className="site-header__input-wrap">
              <input ref="inputNode" className="site-header__input" placeholder="Search" type="text" name="search" value={this.state.searchText} onChange={this.handleSearchChange} />
            </div>
            <div className="site-header__submit-wrap" onClick={this.toggleSearch}>
              <input className="site-header__submit" title="search" type="image" alt="Search" name="submit" src="https://wellcomecollection.org/sites/all/themes/col_base/images/search.svg" />
            </div>
          </form>
        </nav>
      </header>
    )
  }
})

module.exports = SiteHeader
