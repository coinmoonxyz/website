import * as React from "react"
import Img from "gatsby-image"

const PostFigure = ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export default PostFigure
