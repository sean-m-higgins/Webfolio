import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/images.css"

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

export default function EagleImages() {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "eagle1.jpg" }) {
                ...baseImage
            }
            image2: file(relativePath: { eq: "eagle2.jpg" }) {
                ...baseImage
            }
            image3: file(relativePath: { eq: "eagle3.jpg" }) {
                ...baseImage
            }
            image4: file(relativePath: { eq: "eagle4.jpg" }) {
                ...baseImage
            }
            image5: file(relativePath: { eq: "eagle5.jpg" }) {
                ...baseImage
            }
            image6: file(relativePath: { eq: "eagle6.jpg" }) {
                ...baseImage
            }
            image7: file(relativePath: { eq: "eagle7.jpg" }) {
                ...baseImage
            }
            image8: file(relativePath: { eq: "eagle8.jpg" }) {
                ...baseImage
            }
            image9: file(relativePath: { eq: "eagle9.jpg" }) {
                ...baseImage
            }
            image10: file(relativePath: { eq: "eagle10.jpg" }) {
                ...baseImage
            }
            image11: file(relativePath: { eq: "eagle11.jpg" }) {
              ...baseImage
            }
            image12: file(relativePath: { eq: "eagle12.jpg" }) {
                ...baseImage
            }
            image13: file(relativePath: { eq: "eagle13.jpg" }) {
                ...baseImage
            }
            image14: file(relativePath: { eq: "eagle14.jpg" }) {
                ...baseImage
            }
            image15: file(relativePath: { eq: "eagle15.jpg" }) {
                ...baseImage
            }
            image16: file(relativePath: { eq: "eagle16.jpg" }) {
                ...baseImage
            }
            image17: file(relativePath: { eq: "eagle17.jpg" }) {
                ...baseImage
            }
            image18: file(relativePath: { eq: "eagle18.jpg" }) {
                ...baseImage
            }
            image19: file(relativePath: { eq: "eagle19.jpg" }) {
                ...baseImage
            }
            image20: file(relativePath: { eq: "eagle20.jpg" }) {
                ...baseImage
            }
            image21: file(relativePath: { eq: "eagle21.jpg" }) {
                ...baseImage
            }
            image22: file(relativePath: { eq: "eagle22.jpg" }) {
                ...baseImage
            }
            image23: file(relativePath: { eq: "eagle23.jpg" }) {
                ...baseImage
            }
            image24: file(relativePath: { eq: "eagle24.jpg" }) {
                ...baseImage
            }
            image25: file(relativePath: { eq: "eagle25.jpg" }) {
                ...baseImage
            }
        }
    `)
    return (
      <div className="container-fluid eagle-image-box">
            <ul class="flex-container">
                <li><Img fluid={data.image1.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image2.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image3.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image4.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image5.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image6.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image7.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image8.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image9.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image10.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image11.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image12.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image13.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image14.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image15.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image16.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image17.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image18.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image19.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image20.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image21.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image22.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image23.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image24.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
                <li><Img fluid={data.image25.childImageSharp.fluid} alt="Sean Higgins" className="eagle-image"/></li>
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
