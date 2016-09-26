const React = require('react')
const StyleguideItemWrapper = require('../styleguide-item-wrapper/index')

const StyleguideGroup = React.createClass({
  render() {
    return (
      <div className="styleguide__group">
        {this.props.items.map((item) => {
          return <StyleguideItemWrapper key={item} item={item} />
        })}
      </div>
    )
  }
})

module.exports = StyleguideGroup
