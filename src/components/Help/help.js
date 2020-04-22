import React from "react"
import './help.css'
import { Link, useStaticQuery, graphql } from "gatsby"
import Worker from "../../images/carpentry.png"


const Help = () => {

  return (
    <div className="help">
        <div>
          <div>
          <div className="griddy">
            <div></div>
            <div>
              <h2>Problems That Need Solving</h2>
              <br />
              <p> 
                Our aim is collaboration and open discussion to approach the best design we can get.
                In that vein, we have some problems that need solving, and are we're making an open call for
                advice, support, and input of <strong>medical experts, emergency field guides, legal experts, or 
                anyone else</strong> with a willingness to input. Humans work best when we work together.
              </p>
            </div>
            <div></div>
          </div>
          </div>
          
          <div className="contact_container">
            <div></div>
            <div className="contact_us">
              <br />
              <Link to="/contact"><button className="contact_button">Contact Us</button></Link>
              <br />
            </div>
            <div></div>
          </div>
          <br />
          <br />
          <div className="help_contents">
            Below are some technical design problems for eager engineers, listed below
            <ul>
              <li> Build and test to uncover problems,
              develop safety protocols and share advice.</li>
              <li> Spring selection</li>
              <li> Trip Switch and Hard Stop.</li>
              <li> Plastic Bag Cover (Hygiene).</li>
              <li> Motor and Sensor Selection Guide.</li>
              <li> Wiring design and arcing prevention.</li>
              <li> Alarms (patient distress and ABVM fail).</li>
              <li> Cover (with anti-pinch).</li>
              <li> Patient Signal to Start BVM Compression</li>
              <li> FMEA (Failure Modes & Effects Analysis).</li>
              <li> Noise Control</li>
              <li> How-to Build Instructions.</li>
              
            </ul>
          </div>
        </div>
        {/* <img src={Worker} style={{width:`40%`}} /> */}
    </div>)
}

export default Help