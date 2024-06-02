import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"><a href="https://www.imdb.com/conditions?ref_=ft_cou" target="_blank" rel="noopener noreferrer">Terms Of Use</a></li>
                    <li className="menuItem"><a href="https://www.imdb.com/privacy?ref_=ft_pvc" target="_blank" rel="noopener noreferrer">Privacy-Policy</a></li>
                    <li className="menuItem"><a href="https://www.instagram.com/navi.shivi/?igsh=bHFyOW50Y2oyMWRo&utm_source=qr" target="_blank" rel="noopener noreferrer">About</a></li>
                    <li className="menuItem"><a href="https://shivi765201.medium.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li className="menuItem"><a href="https://www.imdb.com/pressroom/?ref_=ft_pr" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                </ul>
                <div className="infoText">
                © 2024 Movix. @Developed By Vaishnavi All rights reserved.
                <div className="infoText">Discover, rate, and share your favorite movies with us.</div>
                <div className="infoText">

                 Contact Us:
                 <div >
Email: support@movix.com
Phone: +1-800-123-4567
</div>

</div>

                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a href="https://www.linkedin.com/in/vaishnavi-dixit-045977192/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="https://www.instagram.com/navi.shivi/?igsh=bHFyOW50Y2oyMWRo&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="http://twitter.com/VaishnaviD64822" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="https://github.com/vaishnaviDixit" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
