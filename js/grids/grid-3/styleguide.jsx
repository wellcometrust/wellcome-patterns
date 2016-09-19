const React = require('react')
const Grid_3 = require('./')
const SampleComponent = require('../../components/sample-component/index')

const Grid_3Example = () => (
  <Grid_3 isNarrow>
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
  </Grid_3>
)

Grid_3Example.styleguide = {
  title: 'Grid 3',
  urlTitle: 'grid-3',
  description: 'Description for the grid',
  type: 'grid'
}

module.exports = Grid_3Example
