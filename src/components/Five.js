/* eslint-disable no-unused-vars */
import React from 'react'
import Fade from 'react-reveal/Fade'

const Five = props => (
  <section id="five" className="wrapper style2 special fade inactive">
    <Fade duration={1500}>
      <div className="container">
        <header>
          <h2>Monthly Newsletter</h2>
          <p>Sign up for monthly updates!</p>
        </header>
        <form method="post" action="#" className="cta">
          <div className="row gtr-uniform gtr-50">
            <div className="col-8 col-12-xsmall">
              <input
                aria-label="Your email"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
              />
            </div>
            <div className="col-4 col-12-xsmall">
              <input
                aria-label="Submit the form"
                id="submitForm"
                type="submit"
                value="Get Started"
                className="fit primary"
              />
            </div>
          </div>
        </form>
      </div>
    </Fade>
  </section>
)
export default Five
