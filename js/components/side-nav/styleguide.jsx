const React = require('react')
const SideNav = require('./')
const data = require('./data/default.json')

const SideNavExample = () => (
  <SideNav items={data.items} />
)

SideNavExample.styleguide = {
  propTypes: SideNav.propTypes,
  type: 'component',
  title: 'Side Nav',
  urlTitle: 'side-nav',
  description: 'Side navigation description goes here.'
}

module.exports = SideNavExample
