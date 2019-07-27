import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import Dropdown from '../components/better/dropdown'
import LiveRegion from '../components/better/live-region'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <h2>Let’s make the web more accessible!</h2>
      <Dropdown activatorText="About" items={[{
        text: 'Overview',
        url: '#'
      },{
        text: 'Our team',
        url: '#'
      },{
        text: 'Careers',
        url: '#'
      }]} />
      <button>Launch modal</button>
      <LiveRegion />
      <Carousel />
    </div>
  </Layout>
)

export default IndexPage


