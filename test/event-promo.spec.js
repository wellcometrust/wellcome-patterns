/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const EventPromo = require('../js/components/event-promo/index')
const { shallow } = require('enzyme')

describe('Component | <EventPromo />', () => {
  it('should render', () => {
    expect(shallow(<EventPromo />).is('.event-promo')).to.equal(true);
  })
})
