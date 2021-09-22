import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function Home({data}) {
  console.log("data:", data)
  const {title, description} = data.site.siteMetadata
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
          <img
            src="/banner.png"
            alt="site banner"
            style={{ maxWidth: "100%" }}
          />
          <p>{title} -- {description}</p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        title
      }
    }
  }
`
