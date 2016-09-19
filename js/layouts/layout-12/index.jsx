const React = require('react')
const Layout = require('../layout/index')
const LayoutColumn = require('../layout-column/index')

const Layout_12 = (props) => (
  <Layout layoutClass="layout--12" isNarrow={props.isNarrow}>
    <LayoutColumn number="1">
      {props.children}
    </LayoutColumn>
  </Layout>
)

const { element, bool } = React.PropTypes

Layout_12.propTypes = {
  children: element,
  isNarrow: bool
}

module.exports = Layout_12
