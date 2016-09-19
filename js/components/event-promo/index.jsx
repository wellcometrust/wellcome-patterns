const React = require('react')

const EventPromo = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  createMarkup(data) {
    return {__html: data}
  },

  render() {
    const data = this.props.data
    let isFullyBooked

    if (data.meta.spaces === 0) {
      isFullyBooked = (
        <span className="event-promo__spaces">Fully Booked</span>
      )
    } else {
      isFullyBooked = (
        <span className="event-promo__spaces">{data.meta.spaces} remaining</span>
      )
    }

    return (
      <div className="event-promo">
        <img
          className="event-promo__image"
          src={data.imageSrc} />
        <h2 className="event-promo__title">
          <a className="event-promo__link" href={data.mainUrl}>{data.title}</a>
        </h2>
        <div className="event-promo__meta">
          {data.meta.types.map((type) => {
            return <span key={type} className="event-promo__type">{type}</span>
          })}
          {isFullyBooked}
        </div>
        <div className="event-promo__date-time">
          <span className="event-promo__date">{data.dateTime.dateHuman}</span>
          {data.dateTime.times.map((time) => {
            return <span key={time} className="event-promo__time">{time}</span>
          })}
        </div>
        <div className="event-promo__description" dangerouslySetInnerHTML={this.createMarkup(data.description)} />
        <div className="event-promo__extra" dangerouslySetInnerHTML={this.createMarkup(data.extra)} />
      </div>
    )
  }
})

module.exports = EventPromo
