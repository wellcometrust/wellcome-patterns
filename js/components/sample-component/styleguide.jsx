const React = require('react')
const SampleComponent = require('./')

const SampleComponentExample = () => (
  <SampleComponent />
)

SampleComponentExample.styleguide = {
  type: 'component',
  title: 'Sample Component',
  urlTitle: 'sample-component',
  description: 'This is a placeholder to show e.g. how grids and layouts hold components.'
}

module.exports = SampleComponentExample
