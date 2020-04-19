import React from "react"
import "./Home.css"
import Four from "../images/four"
import Seven from "../images/seven"
import { Link } from "gatsby"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArchive, faCloudDownloadAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <div className="understand">
          <p className="main_title">Automated Bag Valve Mask Ventilator. </p>
          <p className="sub_title">A low-cost, open source design by Doran designs</p>
        </div>
          <div className="abstract">
            <p>
              In response to the Covid 19 pandemic, we have designed a
              mechanism to automate a Bag Valve Mask (BVM) ventilator). The design comes in 3 levels.
              The first, available below is the minimum working design. We approached the first
              level with the idea that the ventilator can be automated with minimal machines &amp;
              tooling. We call this level <strong>Garage</strong>.
            </p>
          </div>
        
          <div className="links_box">
            <div>
              <p>
                Download the latest design files:<br />
                <div className="download_links">
                  <div className="link"><a href="https://github.com/dorandesigned/AutoBVM" target="_blank"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Github</a></div>
                  <div className="link"><Link to="/garage/garage_2020APR13.zip"><FontAwesomeIcon icon={faFileArchive} /> Mirror</Link></div>
                </div>
              </p>
            </div>
          </div>

        <div className="image_box">
          <div><Seven /><Four /></div>
        </div>
      </div>
      <br />

      <span className="text_block">
        {" "}
        In response to the Covid 19 pandemic, we intend to develop a mechanism
        to automate a BVM (Bag Valve Mask; a low-cost), widely-available,
        manually-operated ventilator). BVMs are available in 3 sizes, are
        certified for medical use and can be supplemented with oxygen where
        available. An ABVM requires more than squeezing a bag. It must also have
        adjustable tidal volume (size of breath) and BPM (Breaths per Minute).
        <br />
        <br />
        <br /> The basic design, Garage, can be made with hand tools using
        locally available materials and a few common electrical components.{" "}
        <br />
        <br /> The intermediate version, Precision, is made with machine tools
        and will incorporate more expensive elements like bearings and
        electronic control. <br />
        <br /> The final, long-term objective is to develop a high-volume,
        low-cost, CE certified version, Production, built on the learnings from
        Garage &amp; Precision. Production will use high-volume manufacturing
        methods, higher quality parts with more focus on safety and approvals.
        It will include additional functionality/features.
        <br />
        <div className="text_highlight">
          <br /> Our designs will be open-source, free for all, but not for
          profit.
          <br />
        </div>
        <br /> Success will depend on a community of users to help build and
        test prototypes and feedback design improvements. We don’t want many competing designs, 
        but rather a consensus of opinion on the problem, and the best solution.
        <br />
        
        <br /> You can <Link to="/garage/garage2020APR13.zip">download plans</Link> for Garage today, and get started.
      </span>
    </div>
  )
}

export default Home