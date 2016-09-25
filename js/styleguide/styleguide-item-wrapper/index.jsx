const React = require('react')

const StyleguideItemWrapper = React.createClass({
  getInitialState() {
    return {isShowingDetails: false}
  },

  propTypes: {
    children: React.PropTypes.node
  },

  toggleDetails() {
    this.setState({isShowingDetails: !this.state.isShowingDetails})
  },

  getActive() {
    return this.state.isShowingDetails ? 'is-active' : ''
  },

  render() {
    const styleguide = this.props.children.type.styleguide
    let jsonSection

    if (styleguide.json) {
      jsonSection = (
        <code className="styleguide-item-wrapper__code">
          <pre className="styleguide-item-wrapper__pre">
            {styleguide.json}
          </pre>
        </code>
      )
    }

    let styleguideItemDetails

    if (!styleguide.hideDetails) {
      styleguideItemDetails = (
        <div className={`styleguide-item-wrapper__details ${this.getActive()}`}>
          <div className="styleguide-item-wrapper__header" onClick={this.toggleDetails}>
            <h3 className="styleguide-item-wrapper__heading">
              <svg className="styleguide-item-wrapper__chevron"><use xlinkHref="#icon-chevron"></use></svg>
              Details
            </h3>
          </div>
          <div className="styleguide-item-wrapper__body">
            <h4 className="styleguide-item-wrapper__item-heading">{styleguide.title}</h4>
            <div className="styleguide-item-wrapper__description">
              <p>{styleguide.description}</p>
            </div>
            {jsonSection}
          </div>
        </div>
      )
    }

    return (
      <div className="styleguide-item-wrapper">
        <h2 className="styleguide-item-wrapper__item-heading">{styleguide.title}</h2>
        <div className="styleguide-item-wrapper__component">
          {this.props.children}
        </div>
        {styleguideItemDetails}
      </div>
    )
  }
})

module.exports = StyleguideItemWrapper
