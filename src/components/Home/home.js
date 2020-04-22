import React from "react"
import "./Home.css"
// import Seven from "../../images/garage/Image4.png"
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"
import Links from  '../Links/links'

const Home = () => {

  const ventpics = useStaticQuery(graphql`
      query {
        mobileImage: file(relativePath: { eq: "garage/Image7.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(relativePath: { eq: "garage/Image10.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    `)

  return (
    <div className="homepage">
      <div>
        <div className="understand">
          <p className="main_title">Automated Bag Valve Mask Ventilator </p>
          <p className="text_section">A low-cost, open source design by Doran designs</p>
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

        <div className="image_box">
          <Img fluid={ventpics.desktopImage.childImageSharp.fluid} />
          <Img fluid={ventpics.mobileImage.childImageSharp.fluid} />
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
        <p className="text_section">Design by Best Idea 
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
        
        <br /> You can <Link to="/garage/Garage20APR20.zip">download plans</Link> for Garage today, and get started.
      </span>
    </div>
  )
}

export default Home