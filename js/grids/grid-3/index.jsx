const React = require('react')
const Grid = require('../grid/index')

const Grid_3 = (props) => (
  <Grid gridClass="grid--3" isNarrow={props.isNarrow}>
    {props.children.map((cellItem, index) => {
      return (
        <div className="grid__cell" key={index}>
          {cellItem}
        </div>
      )
    })}
  </Grid>
)

Grid_3.propTypes = {
  children: React.PropTypes.node,
  isNarrow: React.PropTypes.bool
}

module.exports = Grid_3
