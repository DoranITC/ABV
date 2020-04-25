import React from 'react'
import {Link} from 'gatsby'
import './topbar.css'

const active = {
  fontWeight: `bold`,
  color: `#666`
}

const Topbar = () => (
  <div className="topbar_container">
    <div>
      <ul className="nav_list">
        <li className="nav_list_item"><Link to="/" className="nav_link" activeStyle={active}>Home</Link></li>
        <li className="nav_list_item"><a className="nav_link" href="/AVBM-DORAN-20APR20.pdf">Project Overview</a></li>
        <li className="nav_list_item"><Link to="/download" className="nav_link" activeStyle={active}>Downloads</Link></li>
        <li className="nav_list_item"><Link to="/contact" className="nav_link" activeStyle={active}>Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Topbar