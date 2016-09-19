const React = require('react')
const EventPromo = require('./')
const defaultData = require('./data/default')

const EventPromoExample = () => (
  <EventPromo data={defaultData} />
)

EventPromoExample.styleguide = {
  title: 'Event Promo',
  urlTitle: 'event-promo',
  description: 'Blue bottle jianbing mumblecore celiac banh mi tumblr bushwick ullamco. Narwhal 3 wolf moon drinking vinegar normcore deep v. Yr vero consectetur vinyl. Tote bag mumblecore selvage, four loko heirloom offal veniam keytar kinfolk salvia farm-to-table. Twee poke listicle.',
  json: `${JSON.stringify(defaultData, null, 2)}`,
  type: 'component'
}

module.exports = EventPromoExample
