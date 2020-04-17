import React from "react"
import Four from "./images/four"
import Seven from "./images/seven"
import ReactPlayer from "react-player"
import styled from 'styled-components'

const Main = styled.div`
  padding-top: 5em;
`

const ImgBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

const Content = () => {
  return (<Main>
      {/* <h2>What?</h2>
      Low-cost Automated Bag Valve Mask Ventilator. An open source design. 
      <VentFront style={{ width: `20vw` }}/> 
      <img src={VentFront}/> 
      <h2>Design Philosophy</h2> */}
      <ImgBox>
        <Seven/>
        <Four/>
      </ImgBox>
      <h2 className="content">In response to the Covid 19 pandemic, we intend to develop a mechanism to automate a BVM (Bag Valve Mask; a low-cost), widely-available, manually-operated ventilator). BVMs are available in 3 sizes, are certified for medical use and can be supplemented with oxygen where available.</h2>

      <h2 className="content">An ABVM requires more than squeezing a bag. It must also have adjustable tidal volume (size of breath) and BPM (Breaths per Minute).</h2>
      <h2 className="content">The basic design (Garage) can be made with hand tools using locally available materials and a few common electrical components. </h2>

      <h2 className="content">The intermidiate version (Precision) is made with machine tools and will incorporate more expensive elements liek bearings and electronic control. </h2>

      <h2 className="content">The final, long-term objective is to develop a high-volume, low-cost, CE certified version (Production) built on the learnings from Garage & Precision. Production will use high-volume manufacturing methods, higher quality parts with more focus on safety and approvals. It will include additional functionality/features.</h2>

      <h2 className="content">Our designs will be open-source, free for all, but not for profit.
      Success will depend on a community of users to help build and test prototypes and feedback design improvements.
      We don't want many competing desings, but rather a consensus of opinion on the problem, and the best solution.</h2>

      <h2 className="content">You can download plans for Garage today, and get started.</h2>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=x7bhCJyynkA"
        /> */}
    </Main>)
}

export default Content
