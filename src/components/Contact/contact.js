import React from "react"
import "./contact.css"
import styled from 'styled-components'

const Form = () => {
  return(
    <div>
      <div>
      <form method="post" name="contact-us" netlify-honeypot="bot-field" data-netlify="true"  class="form-style-9">
      <input type="hidden" name="bot-field"/>
      <ul>
        <li>
            <input type="text" name="name" class="field-style field-split align-left" placeholder="Name" />
            <input type="email" name="email" class="field-style field-split align-right" placeholder="Email" />

        </li>
        <li>
            <input type="text" name="phone" class="field-style field-split align-left" placeholder="Phone" />
            <input type="url" name="website" class="field-style field-split align-right" placeholder="Website" />
        </li>
        <li>
          <input type="text" name="subject" class="field-style field-full align-none" placeholder="Subject" />
        </li>
        <li>
          <textarea name="message" class="field-style" placeholder="Message"></textarea>
        </li>
        <li>
         <input type="submit" value="Send Message" />
        </li>
      </ul>
      </form>
    </div>
    </div>
  )
}

const TopBit = styled.div`
  padding-left: 2em;

`

const Contact = () => {
  return (<div>
    <div className="body_container">
      <TopBit>
        <div className="top_bit_container">
          <p className="title">Contact Us</p>
          <p className="msg">Send us a message or improvement suggestion:</p>
          <p className="msg">Leave your contact information and we'll try our best to get back to you</p>
        </div>
      </TopBit>
      <Form />
    </div>
    </div>)
}

export default Contact