import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default function DeskImages() {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "desk1.jpg" }) {
                ...baseImage
            }
            image2: file(relativePath: { eq: "desk2.jpg" }) {
                ...baseImage
            }
            image3: file(relativePath: { eq: "desk3.jpg" }) {
                ...baseImage
            }
            image4: file(relativePath: { eq: "desk4.jpg" }) {
                ...baseImage
            }
        }
    `)
    return (
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} alt="Sean Higgins"/>
        <Img fluid={data.image2.childImageSharp.fluid} alt="Sean Higgins"/>
        <Img fluid={data.image3.childImageSharp.fluid} alt="Sean Higgins"/>
        <Img fluid={data.image4.childImageSharp.fluid} alt="Sean Higgins"/>
      </div>
    )
  }
  
export const baseImage = graphql`
  fragment baseImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
