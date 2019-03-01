import React from 'react'
import { Link } from 'gatsby'

class About extends React.Component {

  render() {
    return (
      <article id="about" >
      <Link to="/">home</Link>
        <h2 className="major">About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
      </article>
    )
  }
}

export default About
