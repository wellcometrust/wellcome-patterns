const React = require('react')
const StyleguideItemWrapper = require('../../styleguide/styleguide-item-wrapper/index')

const StyleguideMain = React.createClass({
  getInitialState() {
    return {isFullScreen: false}
  },

  propTypes: {
    items: React.PropTypes.array.isRequired
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
        {this.props.items.map((item) => {
          const itemType = item.type
          let itemToRender

          if (itemType) {
            itemToRender = item
          } else {
            itemToRender = React.createElement(item)
          }

          return (
            <StyleguideItemWrapper key={item}>
              {itemToRender}
            </StyleguideItemWrapper>
          )
        })}
      </div>
    )
  }
})

module.exports = StyleguideMain
