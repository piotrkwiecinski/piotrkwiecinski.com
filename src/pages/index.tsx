import * as React from 'react'

const IndexPage = () => (
  <>
    <div className="row">
      <div className="medium-6 columns hero">
        <div className="hero-content">
          <h1>
            Hi! I'm Piotr Kwiecinski. <br />
            Senior fullstack developer based in London, United Kingdom.
          </h1>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="medium-6 columns text-center">
        <ul className="social-icons">
          <li>More</li>
          <li className="hide-sm">-</li>
          <li>
            <a href="https://www.linkedin.com/in/pkwiecin/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/piotrkwiecinski" title="Github">
              Github
            </a>
          </li>
          <li>
            <a href="mailto:piokwiecinski@gmail.com" title="Email">
              Email
            </a>
          </li>
          <li>
            <a href="https://twitter.com/piokwiecinski">Twitter</a>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <div className="row">
        <div className="small-12 columns">
          <p>&copy; 2017 Piotr Kwiecinski. Fullstack developer.</p>
        </div>
      </div>
    </footer>
  </>
)

export default IndexPage

// Gatsby v5: use the Head export instead of react-helmet
export const Head = () => (
  <>
    <title>Piotr Kwiecinski - Fullstack developer</title>
    <style>{`
      body {
        font: .875rem/1.563rem 'Lato', sans-serif;
      }

      h1 {
        font-size: 2em;
        line-height: 1.8;
      }

      .hero {
        margin-top: 50px;
      }

      .columns {
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
      }

      .row {
        max-width: 75rem;
        margin-right: auto;
        margin-left: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
      }

      .social-icons {
        padding: 0;
        list-style-type: none;
      }

      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: block;
      }

      .hide-sm {
        display: none;
      }

      @media only screen and (min-width: 480px) {
        h1 {
          font-size: 3em;
          line-height: 1.5;
        }

        .hide-sm {
          display: inline-block;
        }

        .social-icons li {
          float: left;
          padding-right: 15px;
        }

        .hero {
          margin-top: 250px;
        }
      }
    `}</style>
  </>
)
