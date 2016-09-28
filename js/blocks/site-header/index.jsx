const React = require('react')

const SiteHeader = React.createClass({
  getInitialState() {
    return {
      isFormActive: false,
      searchText: ''
    }
  },

  propTypes: {
    setIsOverlayed: React.PropTypes.func
  },

  handleSearchChange(event) {
    this.setState({searchText: event.target.value})
  },

  toggleNav(event) {
    event.preventDefault()
    this.setState({isFormActive: !this.state.isFormActive})
    this.refs.inputNode.focus()
    this.props.setIsOverlayed(!this.state.isFormActive)
  },

  getFormActive() {
    if (!this.state.isFormActive) return

    return 'is-active'
  },

  render() {
    return (
      <header className="site-header" role="banner">
        <a className="site-header__logo" href="/">
          <img src="https://wellcomecollection.org/sites/all/themes/col_base/images/wellcomecollection-logo.svg" alt="Wellcome Collection" />
        </a>
        <p className="site-header__strapline">The free destination for the incurably curious</p>
        <a href="#" className="site-header__nav-toggle">Menu</a>
        <nav className="site-header__nav" aria-hidden="true">
          <ul className="site-header__list">
            <li className="site-header__item">
              <a className="site-header__link" href="#">Visit us</a>
            </li>
            <li className="site-header__item">
              <a className="site-header__link is-active" href="#">What&apos;s on</a>
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
            <div className="site-header__submit-wrap" onClick={this.toggleNav}>
              <input className="site-header__submit" title="search" type="image" alt="Search" name="submit" src="https://wellcomecollection.org/sites/all/themes/col_base/images/search.svg" />
            </div>
          </form>
        </nav>
      </header>
    )
  }
})

module.exports = SiteHeader
