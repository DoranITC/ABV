import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Worker from "../../images/carpentry.png"


const Help = () => {

  return (<div style={{display: "flex", paddingTop: `8vh`, justifyContent: "center", alignItems: "center", flexFlow: "column wrap"}}>
        <div><h2>Under construction...</h2></div>
        <img src={Worker} style={{width:`40%`}} />
    </div>)
}

export default Help