import React from 'react'
import Links from  '../../Links/links'

const Intro = () => (
  <div className="introduction">
    <div className="understand">
      <p className="main_title">Automated Bag Valve Mask Ventilator </p>
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
    
      <Links />

  </div>
)

export default Intro