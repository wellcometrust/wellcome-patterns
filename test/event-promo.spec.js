/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const EventPromo = require('../js/components/event-promo/index')
const { shallow } = require('enzyme')
const defaultData = require('../js/components/event-promo/data/default')

describe('Component | <EventPromo />', () => {
  it('should render', () => {
    expect(shallow(<EventPromo data={defaultData} />).is('.event-promo')).to.equal(true)
  })
})
