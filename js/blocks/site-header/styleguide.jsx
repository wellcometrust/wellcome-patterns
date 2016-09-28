const React = require('react')
const SiteHeader = require('./')

const SiteHeaderExample = () => (
  <SiteHeader setIsOverlayed={function() {
    console.log('toggle overlay on base-layout__main')
  }} />
)

SiteHeaderExample.styleguide = {
  title: 'Site header',
  type: 'block',
  urlTitle: 'site-header'
}

module.exports = SiteHeaderExample
