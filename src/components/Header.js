import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header">
        <div className="logo">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Access the Gurus</h1>
                <p>Fed up with agencies that over-promise and under-deliver? Great news, We are not an agency! We work directly with your leadership team to establish objectives, and we guarantee results!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/intro">Intro</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
