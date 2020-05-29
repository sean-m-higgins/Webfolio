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

export default function ShoeImages() {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "shoe1.jpg" }) {
                ...baseImage
            }
            image2: file(relativePath: { eq: "shoe2.jpg" }) {
                ...baseImage
            }
            image3: file(relativePath: { eq: "shoe3.jpg" }) {
                ...baseImage
            }
            image4: file(relativePath: { eq: "shoe4.jpg" }) {
                ...baseImage
            }
            image5: file(relativePath: { eq: "shoe5.jpg" }) {
                ...baseImage
            }
            image6: file(relativePath: { eq: "shoe6.jpg" }) {
                ...baseImage
            }
        }
    `)
    return (
      <div className="container-fluid shoe-image-box">
            <ul class="flex-container">
              <li><Img fluid={data.image1.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
              <li><Img fluid={data.image2.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
              <li><Img fluid={data.image3.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
              <li><Img fluid={data.image4.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
              <li><Img fluid={data.image5.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
              <li><Img fluid={data.image6.childImageSharp.fluid} alt="Sean Higgins" className="shoe-image"/></li>
            </ul>
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
