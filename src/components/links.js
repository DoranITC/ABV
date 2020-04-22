import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArchive, faCloudDownloadAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons'

const Links = () => (
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
)

export default Links
