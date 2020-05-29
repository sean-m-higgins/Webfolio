import React, { Component } from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row outerBox">
                    <div className="col">
                        <ul>
                            <li className="listItem"><a href="https://github.com/sean-m-higgins"> <FontAwesomeIcon icon={ faGithub } className="inner-about-contact" /></a></li>
                            <li className="listItem"><a href="https://www.linkedin.com/in/sean-m-higgins20/"> <FontAwesomeIcon icon={ faLinkedin } className="inner-about-contact" /></a></li>
                            <li className="listItem"><a href="mailto:shiggins@luc.edu?subject=Person Website Inquiry"> <FontAwesomeIcon icon={ faEnvelope } className="inner-about-contact" /></a></li>
                            <li className="listItem"><a href="https://www.instagram.com/hazy.lens/"> <FontAwesomeIcon icon={ faInstagram } className="inner-about-contact" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer