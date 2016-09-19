const React = require('react')
const StyleguideSubheading = require('../styleguide-subheading/index')
const { Link } = require('react-router')

const StyleguideSidebar = React.createClass({
  getInitialState() {
    return {
      isComponentsActive: false,
      isLayoutsActive: false,
      isGridsActive: false,
      isTemplatesActive: false
    }
  },

  itemTypes: ['Components', 'Layouts', 'Grids', 'Templates'],

  toggleActive(type) {
    switch (type) {
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
        <h1 className="styleguide__heading"><Link className="link" to="/">Wellcome Patterns</Link></h1>
        {this.itemTypes.map((type) => {
          return (
            <section key={type} className={`styleguide__section ${this.getActive(type)}`}>
              <StyleguideSubheading
                toggleActive={this.toggleActive}
                type={type} />
              <ul className="styleguide__list">
                {this.props[`${type.toLowerCase()}`].map((itemType) => {
                  return (
                    <li key={itemType} className="styleguide__item">
                      <Link className="styleguide__link" activeClassName="active" to={`/${itemType.styleguide.urlTitle}`}>{itemType.styleguide.title}</Link>
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
