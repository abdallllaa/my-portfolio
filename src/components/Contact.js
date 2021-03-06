import React from 'react'
import Title from "./Title";
import { FaLinkedin ,FaGithubSquare,FaTwitter} from "react-icons/fa";
const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                 <Title title="Contact Me" />
                 <div className="content-contact text-center">
                     <h6 className="mail">3bdallah.dev@gmail.com</h6>
                     <p className="mobile">01156448493</p>
                     <a href="https://github.com/abdallllaa/my-resum/raw/master/My%20resume%20.pdf" target="blank" className="resume">resume</a>
                      <br/>
                     <div className="icons">
                     <span className="icon linkedin"><a href="https://www.linkedin.com/in/abdallah-abdelghaffar-65136614b/" target="blank"><FaLinkedin/></a></span>
                      <span className="icon github"><a href="https://github.com/3bdalah" target="blank"><FaGithubSquare/></a></span>
                      <span className="icon twitter"><a href="https://twitter.com/3bdallahdev" target="blank"><FaTwitter/></a></span>
                   
                     </div>

                 </div>
            </div>
        </section>
    )
}
export default Contact;