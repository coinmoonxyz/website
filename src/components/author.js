/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Img } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Author = props => {
  const { id, description, img } = props.author
  
  return (
    <p className="bio">
      {/* <StaticImage src={img} /> */}
      {/* <Img fixed={img.childImageSharp.fixed} /> */}
      {id && (
        <p>
          by {id} {description || null}
        </p>
      )}
    </p>
  )
}

export default Author
