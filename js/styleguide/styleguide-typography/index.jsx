const React = require('react')

const Typography = () => (
  <div className="styleguide__typography">
    <h2 className="styleguide-item-wrapper__item-heading">Typography</h2>
    <div className="text">
      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
      <p>Body copy, lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsum fugit <a href="#">a default link</a> soluta praesentium, nobis quibusdam. Labore fugit pariatur some <strong>strong text</strong> eligendi, atque quo cupiditate quibusdam quas fuga tempore ab, explicabo distinctio velit! And some <em>emphasised</em> text.</p>
      <h2>Unordered list</h2>
      <p>
        <ul>
          <li>item one</li>
          <li>item two</li>
          <li>item three</li>
          <li>item four</li>
        </ul>

        <h2>Ordered list</h2>
        <ol>
          <li>item one</li>
          <li>item two</li>
          <li>item three</li>
          <li>item four</li>
        </ol>
      </p>
    </div>
  </div>
)

module.exports = Typography
