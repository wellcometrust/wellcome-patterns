const React = require('react')

const StyleguideSubheading = React.createClass({
  propTypes: {
    toggleActive: React.PropTypes.func.isRequired,
    type: React.PropTypes.string
  },

  toggleActive() {
    this.props.toggleActive(this.props.type)
  },

  render() {
    return (
      <h2
        className="styleguide__subheading"
        onClick={this.toggleActive}>
        <svg className="styleguide__chevron" aria-hidden="true">
          <use xlinkHref="#icon-chevron"></use>
        </svg>
        {this.props.type}
      </h2>
    )
  }
})

module.exports = StyleguideSubheading
