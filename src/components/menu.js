import React from "react"
import styled from 'styled-components'

const AllTheBits = styled.div`
  width: 15em;
`

const Menu = () => {
  return (
    <div>
      <AllTheBits>
        <div>Home</div>
        <div>Other</div>
        <div>Stuff</div>
      </AllTheBits>
    </div>
  )
}

export default Menu