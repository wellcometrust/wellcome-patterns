const React = require('react')
const Grid = require('../grid/index')

const Grid_4 = (props) => (
  <Grid gridClass="grid--4" isNarrow={props.isNarrow}>
    {props.children.map((cellItem, index) => {
      return (
        <div className="grid__cell" key={index}>
          {cellItem}
        </div>
      )
    })}
  </Grid>
)

Grid_4.propTypes = {
  children: React.PropTypes.node,
  isNarrow: React.PropTypes.bool
}

module.exports = Grid_4
