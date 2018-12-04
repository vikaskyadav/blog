import React from 'react'

import { SocialIcon } from 'react-social-icons';
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Vikas Yadav`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Vikas Yadav</strong> who lives and works in the beautiful city of Hyderabad.
          <br/>
          <div>
          <SocialIcon network="email" url="mailto:vikasharry03@gmail.com" color="#e74c3c"/>
          <SocialIcon url="https://github.com/vikaskyadav" />
          <SocialIcon url="https://www.linkedin.com/in/vikasuperman/"/>
          <SocialIcon url="http://medium.com/@vikasharry03" color="teal"/>
          <SocialIcon url="https://twitter.com/donvikas"/>
          </div>
        </p>
      </div>
    )
  }
}

export default Bio
