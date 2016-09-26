const React = require('react')

const Palette = React.createClass({
  componentDidMount(element) {
    let palette_element = this.refs.styleguide__palette
    let palette = window.getComputedStyle(palette_element, ':after').content

    palette = palette.substring(1, palette.length - 1)
    palette = palette.split(' ')

    let pair = {}
    let pairArray = []

    palette.forEach(function(item, index) {
      if (index % 2 === 0) {
        pair.name = item
      } else {
        pair.hex = item
        pairArray.push(pair)
        pair = {}
      }
    })

    pairArray.forEach(function(pair) {
      palette_element.innerHTML += `
      <div class="styleguide__hex" style="background: ${pair.hex};">
        <span class="styleguide__colour">${pair.name}: <code class="styleguide__code">${pair.hex}</code></span>
      </div>`
    })
  },

  render() {
    return (
      <div className="styleguide__palette-wrap">
        <h2>Palette</h2>
        <div className="styleguide__palette" ref='styleguide__palette'></div>
      </div>
    )
  }
})

module.exports = Palette
