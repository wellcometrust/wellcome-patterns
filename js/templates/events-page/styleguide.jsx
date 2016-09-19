const React = require('react')
const EventsPage = require('./')
const data = require('./data/default')

const EventsPageExample = () => (
  <EventsPage events={data.events} />
)

EventsPageExample.styleguide = {
  type: 'template',
  title: 'Events Page',
  urlTitle: 'events-page',
  description: 'Description of the events page goes here.'
}

module.exports = EventsPageExample
