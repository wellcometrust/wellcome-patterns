const React = require('react')
const Layout = require('../layout/index')

const Layout_3_9 = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <Layout isNarrow layoutClass="layout--3-9">
        {this.props.children}
      </Layout>
    )
  }
})

module.exports = Layout_3_9
