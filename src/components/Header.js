import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dimension</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/intro" onClick={() => {props.onOpenArticle('intro')}}>Intro</Link></li>
                <li><Link to="/work" onClick={() => {props.onOpenArticle('work')}}>Work</Link></li>
                <li><Link to="/about" onClick={() => {props.onOpenArticle('about')}}>About</Link></li>
                <li><Link to="/contact" onClick={() => {props.onOpenArticle('contact')}}>Contact</Link></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
