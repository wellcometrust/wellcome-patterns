const React = require('react')
const Row = require('../../row/index')
const Layout_12 = require('../../layouts/layout-12/index')
const SiteHeader = require('../../blocks/site-header/index')

const BaseLayout = ({ children }) => (
  <div>
    <Row className="row--no-top-padding">
      <Layout_12 isNarrow>
        <SiteHeader />
      </Layout_12>
    </Row>
    {children}
  </div>
)

BaseLayout.propTypes = {
  children: React.PropTypes.element
}

module.exports = BaseLayout
