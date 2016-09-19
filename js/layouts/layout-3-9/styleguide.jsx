const React = require('react')
const Layout_3_9 = require('./')
const LayoutColumn = require('../layout-column/index')
const SampleComponent = require('../../components/sample-component/index')

const Layout_3_9Example = () => (
  <Layout_3_9 isNarrow>
    <LayoutColumn number="1">
      <SampleComponent />
    </LayoutColumn>
    <LayoutColumn number="2">
      <SampleComponent />
    </LayoutColumn>
  </Layout_3_9>
)

Layout_3_9Example.styleguide = {
  type: 'layout',
  title: 'Layout 3 9',
  urlTitle: 'layout-3-9',
  description: 'Description of the layout goes here.'
}

module.exports = Layout_3_9Example
