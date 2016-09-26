const React = require('react')

const StyleguideMain = React.createClass({
  getInitialState() {
    return {isFullScreen: false}
  },

  toggleFullScreen() {
    this.setState({isFullScreen: !this.state.isFullScreen})
  },

  getFullScreen() {
    return this.state.isFullScreen ? 'styleguide__main--is-fullscreen' : ''
  },

  render() {
    return (
      <div className={`styleguide__main ${this.getFullScreen()}`}>
        <nav className="styleguide__top-nav">
          <a className="styleguide__menu" title="menu" onClick={this.toggleFullScreen}>
            <span />
            <span />
            <span />
          </a>
        </nav>
        {this.props.item}
      </div>
    )
  }
})

module.exports = StyleguideMain
