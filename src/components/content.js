import React from "react"
import PropTypes from "prop-types"
import Image from "../components/image"
import ReactPlayer from "react-player"

const Content = () => {
  return (<div>
      <h2>What?</h2>
      Low-cost Automated Bag Valve Mask Ventilator. An open source design. 
      <Image style={{ width: `20vw` }}ventilator/>

      <h2>Design Philosophy</h2>
        <p>Some content here</p>
        <h3>The Best Idea,  
          <small class="text-muted"> Not My Best Idea</small>
        </h3>
          <p>How to choose the best idea we have right now, and not get too attached to a single idea</p>

        <br/>
        <h3>3 Skill/Resource levels</h3>

        <br/><br/> 
      <a name="prototypes"/>
      <h2>Prototypes</h2>
        <p>some content</p>
        <br/>

        <h4>
          Here's a question I have...<br/>
          <small class="text-muted">This is the answer to that question... Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas commodo laoreet viverra. Suspendisse pellentesque aliquet bibendum. 
          Sed maximus posuere sapien eu semper. Curabitur nisl urna, facilisis fermentum nisi sed, hendrerit interdum felis. 
          Phasellus mattis ex nec blandit porta. In consectetur ut sem in aliquet. Donec a laoreet tellus, a hendrerit ante. 
          Donec congue diam et metus mollis tincidunt. Nullam ipsum felis, bibendum in orci id, vehicula cursus tortor.</small>
        </h4>

      <h2>Current Problems that Need a Solution</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo laoreet viverra. Suspendisse pellentesque 
          aliquet bibendum. Sed maximus posuere sapien eu semper. Curabitur nisl urna, facilisis fermentum nisi sed, hendrerit 
          interdum felis. Phasellus mattis ex nec blandit porta. In consectetur ut sem in aliquet. Donec a laoreet tellus, a hendrerit ante. 
          Donec congue diam et metus mollis tincidunt. Nullam ipsum felis, bibendum in orci id, vehicula cursus tortor.
        </p>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=x7bhCJyynkA&list=FLVG0FMBPT3n-FpqO6v3Kxww&index=12"
        />
    </div>)
}

Content.propTypes = {
  siteTitle: PropTypes.string,
}

Content.defaultProps = {
  siteTitle: ``,
}

export default Content
