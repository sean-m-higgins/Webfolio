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

export default function SideImages() {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "side1.jpg" }) {
                ...baseImage
            }
            image2: file(relativePath: { eq: "side2.jpg" }) {
                ...baseImage
            }
            image3: file(relativePath: { eq: "side3.jpg" }) {
                ...baseImage
            }
            image4: file(relativePath: { eq: "side4.jpg" }) {
                ...baseImage
            }
            image5: file(relativePath: { eq: "side5.jpg" }) {
                ...baseImage
            }
            image6: file(relativePath: { eq: "side6.jpg" }) {
                ...baseImage
            }
            image7: file(relativePath: { eq: "side7.jpg" }) {
                ...baseImage
            }
            image8: file(relativePath: { eq: "side8.jpg" }) {
                ...baseImage
            }
            image9: file(relativePath: { eq: "side9.jpg" }) {
                ...baseImage
            }
            image10: file(relativePath: { eq: "side10.jpg" }) {
                ...baseImage
            }
        }
    `)
    return (
      <div className="container-fluid side-image-box">
            <ul class="flex-container">
              <li><Img fluid={data.image1.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image2.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image3.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image4.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image5.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image6.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image7.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image8.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image9.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
              <li><Img fluid={data.image10.childImageSharp.fluid} alt="Sean Higgins" className="side-image"/></li>
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
