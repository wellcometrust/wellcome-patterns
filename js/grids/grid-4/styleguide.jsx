const React = require('react')
const Grid_4 = require('./')
const SampleComponent = require('../../components/sample-component/index')

const Grid_4Example = () => (
  <Grid_4 isNarrow>
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
    <SampleComponent />
  </Grid_4>
)

Grid_4Example.styleguide = {
  title: 'Grid 4',
  urlTitle: 'grid-4',
  description: 'Description for the grid',
  type: 'grid'
}

module.exports = Grid_4Example
