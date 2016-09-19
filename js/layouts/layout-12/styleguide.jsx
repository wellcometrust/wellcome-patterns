const React = require('react')
const Layout_12 = require('./')
const SampleComponent = require('../../components/sample-component/index')

const Layout_12Example = () => (
  <Layout_12 isNarrow={false} >
    <SampleComponent />
  </Layout_12>
)

Layout_12Example.styleguide = {
  title: 'Layout 12',
  urlTitle: 'layout-12',
  description: 'Description for the layout',
  type: 'layout'
}

module.exports = Layout_12Example
