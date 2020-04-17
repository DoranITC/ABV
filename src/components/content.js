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
      <br/>
      <h2>Project Overview</h2>
      <h2 className="content">In response to the Covid 19 pandemic, we intend to develop a mechanism to automate a BVM (Bag Valve Mask; a low-cost), widely-available, manually-operated ventilator). BVMs are available in 3 sizes, are certified for medical use and can be supplemented with oxygen where available.</h2>

      <h2 className="content">An ABVM requires more than squeezing a bag. It must also have adjustable tidal volume (size of breath) and BPM (Breaths per Minute).</h2>
      <h2 className="content">The basic design (Garage) can be made with hand tools using locally available materials and a few common electrical components. </h2>

      <h2 className="content">The intermidiate version (Precision) is made with machine tools and will incorporate more expensive elements like bearings and electronic control. </h2>

      <h2 className="content">The final, long-term objective is to develop a high-volume, low-cost, CE certified version (Production) built on the learnings from Garage & Precision. Production will use high-volume manufacturing methods, higher quality parts with more focus on safety and approvals. It will include additional functionality/features.</h2>

      <h2 className="content">Our designs will be open-source, free for all, but not for profit.
      Success will depend on a community of users to help build and test prototypes and feedback design improvements.
      We don't want many competing desings, but rather a consensus of opinion on the problem, and the best solution.</h2>

      <h2 className="content">You can download plans for Garage today, and get started.</h2>

      <h2 >Theory of Operation</h2>
      <h2 className="content">The design can be made with made with locally available substitute materials and can funciton with different motors and switches. It is made using simple bends and with drilled or threaded holes. It can be encapsulated in a plastic bag to maintain hygiene and avoid cross contamination (by taping at the clamping and levers to maintain operation). The levers can be operated while the arms are in motion if required. Not all holes in the three identical Clamping Arms are needed for prototypes but are helpful for high volume manufacturing. The four holes in the lower arms allow attachment to a table or base plate. Holes in the upper arm allow for customised attachments, not shown here, to improve the bag emptying, and to allow compensation for different size or models of BVM.</h2>
      <br/>
      <h2 className="content">The Force Lever varies the spring force which adjusts the available bag squeezing pressure. A spring was chosen for simplicity and reliability. The maximum force at any setting is at the start of the compression cycle. This is to overcome system inertia. Then the spring force reduces over the rest of the cycle. The design allows for different sizes and strength of extension springs, which can be matched with various materials, hole spacing and type or model of BVM. The lever should have some slight flexibility; enough to allow lifting so that the pin locates in the adjustment holes. This lever is below the clamping arms to resist the pull of the spring and keep it engaged in the adjustment holes. </h2>
      <br/>
      <h2 className="content">The Tidal Volume Layer adjusts the amount of squeezing and the volume of air delivered. This lever is above the arms to resist movement and is identical to the force lever (for high volume manufacturing). It incorporates a hard stop for safety (screw and nut) and a lower Trip Switch which restarts the motor at the end of the compression cycle. The upper switch stops the motor and allows a timer or a patient breathing signal to re-start the compression cycle. The <strong>Motor Assembly</strong> opens the arms but is not involved in forced air delivery (for safety). This arrangement allows for customisation of different motors and motor speeds (minimum speed required to be ahead of the bag opening). </h2>
      <br/>
      <h2 className="content">The <strong>Bearing Assembly</strong> allows for different configurations (Drilled blocks, solid or roller bearings). The blocks also form part of the base. Each of the 3 blocks are identical. The middle bearing block is rotated 180 degrees for 6mm clearance. Threaded holes in the blocks allow for arm attachment and to fix the bearing shaft using longer screws.</h2>

      <h1 style={{color: "red"}}><strong>WARNING</strong></h1>
      <br/>
      <h2 className="content">Mechanical Ventilation can cause serious lung injury.</h2>
      <h2 className="content">Too much pressure applied to the lungs can stretch and damage them. The diaphragm (breathing muscle) can rapidly deteriorate (atrophy) when not used. Reduced mucus mobility can lead to harmful build up in the lungs.</h2>
      <br/>
      <h2 className="content">Batteries can electrically shock or cause explosions</h2>
      <h2 className="content">Springs can store energy that can lead to dangerous projectiles or other impacts. Levers can multiply force leading to pinch points capable of causing serious injury. Sharp edges can cut or stab people or cause damage to other objects. Compressed air or gases can be dangerously explosive.</h2>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=x7bhCJyynkA"
        /> */}
    </Main>)
}

export default Content
