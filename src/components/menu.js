import React from "react"
import styled from 'styled-components'

const AllTheBits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15em;
`

const Menu = () => {
  return (
    <div>
      <AllTheBits>
        <div>Project Overview</div>
        <div>Download CAD and Drawings</div>
        <div>How You Can Help</div>
        <div>Contact Us</div>
      </AllTheBits>
    </div>
  )
}

export default Menu