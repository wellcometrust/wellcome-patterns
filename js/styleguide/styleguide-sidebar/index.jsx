const React = require('react')
const StyleguideSubheading = require('../styleguide-subheading/index')
const { Link } = require('react-router')
const SvgIcon = require('../../components/svg-icon')

const StyleguideSidebar = React.createClass({
  getInitialState() {
    return {
      isBlocksActive: false,
      isComponentsActive: false,
      isLayoutsActive: false,
      isGridsActive: false,
      isTemplatesActive: false
    }
  },

  itemTypes: ['Blocks', 'Components', 'Layouts', 'Grids', 'Templates'],

  toggleActive(type) {
    switch (type) {
      case 'Blocks':
        this.setState({isBlocksActive: !this.state.isBlocksActive})
        break
      case 'Components':
        this.setState({isComponentsActive: !this.state.isComponentsActive})
        break
      case 'Layouts':
        this.setState({isLayoutsActive: !this.state.isLayoutsActive})
        break
      case 'Grids':
        this.setState({isGridsActive: !this.state.isGridsActive})
        break
      case 'Templates':
        this.setState({isTemplatesActive: !this.state.isTemplatesActive})
    }
  },

  getActive(type) {
    const itemType = `is${type}Active`

    return this.state[itemType] ? 'is-active' : ''
  },

  render() {
    return (
      <div className="styleguide__sidebar">
        <h1 className="styleguide__heading">
          <Link className="styleguide__logo-wrap" to="/">
            <SvgIcon className="styleguide__logo" name="wellcome-logo" />
            <span>Pattern library</span>
          </Link>
        </h1>

        <section className="styleguide__standalone">
          <Link activeClassName="is-active"
            onlyActiveOnIndex
            className="styleguide__link styleguide__link--standalone"
            to="/">About</Link>
          <Link activeClassName="is-active"
            className="styleguide__link styleguide__link--standalone"
            to="/palette">Palette</Link>
          <Link activeClassName="is-active"
            className="styleguide__link styleguide__link--standalone"
            to="/typography">Typography</Link>
        </section>

        {this.itemTypes.map((type) => {
          return (
            <section key={type}
              className={`styleguide__section ${this.getActive(type)}`}>
              <StyleguideSubheading
                toggleActive={this.toggleActive}
                type={type} />
              <ul className="styleguide__list">
                <li className="styleguide__item">
                  <Link className="styleguide__link"
                    activeClassName="is-active"
                    to={type.toLowerCase()}>All {type}</Link>
                </li>
                {this.props[`${type.toLowerCase()}`].map((itemType) => {
                  return (
                    <li key={itemType}
                      className="styleguide__item">
                      <Link className="styleguide__link"
                        activeClassName="is-active"
                        to={`/items/${itemType.styleguide.urlTitle}`}>{itemType.styleguide.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    )
  }
})

module.exports = StyleguideSidebar
