import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log("data:", data)
  // const image = getImage(data.landing.file)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web deveoper based in Manchester</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
          {/* <GatsbyImage image={image} alt="site banner" /> */}
          <StaticImage src="../images/banner.png" alt="A dinosaur" />
      </section>
    </Layout>
  )
}

// the new plugin has gotten rid of fluid param, see the Project component on how to get image
export const query = graphql`
  query Banner {
    landing:file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
