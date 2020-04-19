import React from "react"
import Four from "./images/four"
import Seven from "./images/seven"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArchive, faCloudDownloadAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="homepage">
      <div className="centered">
        <div className="understand">
          <h1>Automated Bag Valve Mask Ventilator. </h1>
          <h4>A low-cost, open source design by Doran designs</h4>

          <div style= {{paddingTop: `1em`}}>
            <p>
              In response to the Covid 19 pandemic, we intend to develop a
              mechanism to automate a BVM (Bag Valve Mask; a low-cost),
              widely-available, manually-operated ventilator). BVMs are
              available in 3 sizes, are certified for medical use and can be
              supplemented with oxygen where available.
            </p>
          </div>
        </div>
        <div className="linksbox">
          <p>
            Download the latest design files:<br />
            <div style={{ display: "flex", justifyContent: "space-around", paddingTop: `0.5em`}}>
            <div><a href="https://github.com/dorandesigned/AutoBVM" target="_blank"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Github</a></div>
            <div><Link to="/garage/garage_2020APR17.zip"><FontAwesomeIcon icon={faFileArchive} /> Mirror</Link></div>
            </div>
          </p>
        </div>
        <div className="imageBox">
          <Seven />
          <Four />
        </div>
      </div>
      <br />

      <span className="intro">
        {" "}
        In response to the Covid 19 pandemic, we intend to develop a mechanism
        to automate a BVM (Bag Valve Mask; a low-cost), widely-available,
        manually-operated ventilator). BVMs are available in 3 sizes, are
        certified for medical use and can be supplemented with oxygen where
        available.
        <br />
        <br /> An ABVM requires more than squeezing a bag. It must also have
        adjustable tidal volume (size of breath) and BPM (Breaths per Minute).
        <br /> The basic design (Garage) can be made with hand tools using
        locally available materials and a few common electrical components.{" "}
        <br />
        <br /> The intermediate version (Precision) is made with machine tools
        and will incorporate more expensive elements like bearings and
        electronic control. <br />
        <br /> The final, long-term objective is to develop a high-volume,
        low-cost, CE certified version (Production) built on the learnings from
        Garage &amp; Precision. Production will use high-volume manufacturing
        methods, higher quality parts with more focus on safety and approvals.
        It will include additional functionality/features.
        <br />
        <br /> Our designs will be open-source, free for all, but not for
        profit.
        <br /> Success will depend on a community of users to help build and
        test prototypes and feedback design improvements.
        <br /> We don’t want many competing designs, but rather a consensus of
        opinion on the problem, and the best solution.
        <br />
        <br /> You can download plans for Garage today, and get started.
      </span>
    </div>
  )
}

export default Home