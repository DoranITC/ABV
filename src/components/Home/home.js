import React from "react"
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"

import "./Home.css"
import Intro from "./Intro/intro"
// import Seven from "../../images/garage/Image4.png"

const Home = () => {
  const ventpics = useStaticQuery(graphql`
      query {
        smallfive: file(relativePath: { eq: "garage/Image5.png" }) {
          childImageSharp {
            fixed(width: 320, height: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smallten: file(relativePath: {eq: "garage/Image10.png"}) {
          childImageSharp {
            fixed(width: 320, height: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    `)

  return (
    <div>
      <Intro />
      <div className="body_container">

        <div className="image_container">
          <div className="images">
            <div className="image"><Img fluid={ventpics.smallten.childImageSharp.fluid} /></div>
            <div className="image"><Img fluid={ventpics.smallfive.childImageSharp.fluid} /></div>
          </div>
        </div>
        <br />
        <span className="text_block">
          {" "}
          <p className="text_section">Overview</p>
          <p>Our design is available in 3 types. The starting point is to develop plans for a basic design configuration (named Garage) which can be made with hand tools using locally available materials and a few common electrical components. </p><br />
          <p>Building and testing of Garage is open sourced. This website provides detailed plans for the latest design and we are openly calling for participants to help solve specific problems and to feedback observations.</p> <br />
          <p>Using this method, we can rapidly improve the design, uncover new issues and get feedback from interested parties. This work will inform a second configuration (named Precision) that will form the basis for a design that can be made in high-volume. Precision will be more expensive to make and will require machine tools and more purchased components such as roller bearings or additional control and safety systems.
          The longer-term objective is a design for high volume (named Production), a lower cost version of Precision, but with the same or improved functionality. Production will have safety and other certifications. </p>
          <p className="text_section">Design by Best Idea <br />
            (Our Philosophy)</p> <br />
          <p>The origin of the word Innovation means to reuse or renew. Everyone has good ideas, but they don´t belong to anyone; some or all of the idea comes from others. Designs on the other hand, are ideas that have been translated into concrete descriptions, plans or devices.</p> <br />
          <p>For this reason, our design is based on the best idea at a given time. This is not a call for competing designs from which we choose the best one, rather a consensus on the nature of the problem and an agreement on the best solution. If we encounter a better idea that can improve our design were happy to adopt it, even if that means throwing out our current design (we have done this several times already).</p> <br />
          <p className="text_section">Open Source</p>
          <p>A solution is a combination of an idea and a design that requires a clearly defined problem. For this reason, we plan to list our existing set of problems for which we hope someone out there has the solution.
          Our designs will be Open Source, freely available, but not for profit. Success will depend on a community of users to help build and test prototypes, and feedback design improvements. The plans will be stored on Github (@DoranITC.)</p>

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
          
          <br /> You can <Link to="/download">download plans</Link> for Garage today, and get started.
        </span>
      </div>
    </div>
  )
}

export default Home