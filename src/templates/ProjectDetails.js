import React from 'react'
import Layout from '../components/Layout';
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"


export default function ProjectDetails() {
    return (
        <Layout className = {styles.details}>
            <div>
                <h2>title</h2>
                <h3>stack</h3>
                <div className = {styles.featured}>
                    {/* <GatsbyImage /> */}
                </div>
                {/* <div className = {styles.html} dangerouslySetInnerHTML = {} /> */}
            </div>
        </Layout>
    )
}
