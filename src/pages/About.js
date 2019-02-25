import React from 'react'
import styled from '@emotion/styled'

import PageSpecial from '../layouts/PageSpecial'
import Meta from '../layouts/Meta'
import Heading from '../components/Heading'

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Section = styled.section`
  width: 600px;
`

const HorizontalRule = styled.hr`
  border: 1px solid hsla(45, 86%, 62%, 1);
  max-width: 300px;
`

const About = () => {
  return (
    <PageSpecial>
      <Meta title="About Us" />
      <Heading size={2} scheme="light">
        About Idea Byte
      </Heading>
      <Sections>
        <Section>
          <p>
            <span role="img" aria-label="bulb">
              💡
            </span>
            Idea Byte helps ideators, innovators, developers, and any other
            humans to find and share ideas for inspiration. To date, there has
            been plenty of ideas — big and small — have come to be shared in the
            community.
          </p>
          <p>
            Welcome to{' '}
            <span role="img" aria-label="bulb">
              💡
            </span>
            Idea Byte!
          </p>
        </Section>
        <Section>
          <HorizontalRule />
        </Section>
        <Section>
          <p>
            This web application is developed in just 5 days at{' '}
            <a href="https://impactbyte.com">Impact Byte</a>, the fastest
            intensive full stack web with JavaScript technologies coding
            bootcamp on Earth. Visit{' '}
            <a href="https://impactbyte.com">https://impactbyte.com</a>
          </p>
          <p>
            To see the whole source code of this application, visit{' '}
            <a href="https://github.com/ideabyte">
              https://github.com/ideabyte
            </a>
          </p>
        </Section>
      </Sections>
    </PageSpecial>
  )
}

export default About
