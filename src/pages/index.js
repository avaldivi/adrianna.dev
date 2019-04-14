import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import freaks from '../images/wtf.png'
import SEO from "../components/seo"

function Freaks() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={props}>
      <img src={freaks} alt="idk" />
    </animated.div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {Freaks()}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
