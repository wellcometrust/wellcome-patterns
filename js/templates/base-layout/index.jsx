const React = require('react')
const Row = require('../../row/index')
const Layout_12 = require('../../layouts/layout-12/index')
const SiteHeader = require('../../blocks/site-header/index')

const BaseLayout = React.createClass({
  getInitialState() {
    return {
      isOverlayed: false
    }
  },

  propTypes: {
    children: React.PropTypes.element
  },

  getIsOverlayed() {
    return this.state.isOverlayed ? 'is-overlayed' : ''
  },

  setIsOverlayed(value) {
    this.setState({isOverlayed: value})
  },

  render() {
    return (
      <div className={`base-layout ${this.getIsOverlayed()}`}>
        <Row className="row--no-top-padding">
          <Layout_12 isNarrow>
            <SiteHeader setIsOverlayed={this.setIsOverlayed} />
          </Layout_12>
        </Row>
        <div className="base-layout__main" role="main">
          <div className="base-layout__overlay"></div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = BaseLayout
