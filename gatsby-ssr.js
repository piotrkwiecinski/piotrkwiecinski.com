const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-site-verfication"
      name="google-site-verification"
      content="C16XQgGM1KzwMJJIaMhTqHK1s0sRzIZk9WPYS4Cw4es"
    />,
  ])
}
