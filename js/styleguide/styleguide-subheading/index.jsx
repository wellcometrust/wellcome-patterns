const React = require('react')
const SvgIcon = require('../../components/svg-icon/index')

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
        <SvgIcon className="styleguide__chevron" name="chevron" />
        {this.props.type}
      </h2>
    )
  }
})

module.exports = StyleguideSubheading
