import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Section = styled.section`
  width: 500px;
  margin: 0 auto;
`
const About = () => {
  return (
    <div>
      <Header />
      <Section>
        <h2>About Page</h2>
        <p>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community. Welcome toIdea Byte! This full stackweb application is
          developed in just 5 days at Impact Byte, the fastest intensive full
          stack web with JavaScript technologies coding bootcamp on Earth. Visit
          https://impactbyte.com To see the whole source code of this
          application, visit https://github.com/ideabyte We use Git, GitHub,
          Figma, VS Code, HTML5, CSS3, JavaScript, React, React Hot Reload,
          React Router, React Helmet, Emotion, Redux, Netlify, Node.js, Express,
          MongoDB, Mongoose, MySQL, Knex.js, Objection.js, Heroku, Google Cloud
          Platform, and variety of other tools on Linux and macOS.
        </p>
      </Section>
      <Footer />
    </div>
  )
}
export default About
