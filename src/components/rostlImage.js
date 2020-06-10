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

export default function RostlImage() {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "rostl.png" }) {
                ...baseImage
            }
        }
    `)
    return (
      <div className="container-fluid shoe-image-box">    
        <Img fluid={data.image.childImageSharp.fluid} alt="Sean Higgins" className="rostl-image"/>
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
