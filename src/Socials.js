import React, { Component } from 'react';
import './css/Socials.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { motion } from "framer-motion"


class Socials extends Component {
  render() {
    return (
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 2, duration: 1}}
      className={this.props.className}>
      <div orientation="left" className="social-nav-links">
        <ul>
          <li>
            <a href="https://github.com/imranjami" target="_blank" aria-label="GitHub">
              <motion.i
              whileHover={{scale:1.2}} className="fab fa-github"></motion.i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/imran-jami/" target="_blank" aria-label="LinkedIn">
              <motion.i
              whileHover={{scale:1.2}} className="fab fa-linkedin"></motion.i>
            </a>
          </li>
          <li>
            <a href="mailto:imranajami@gmail.com" target="_blank" aria-label="Email">
              <motion.i
              whileHover={{scale:1.2}} className="far fa-envelope"></motion.i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/artbyimran/" target="_blank" aria-label="Instagram">
              <motion.i
              whileHover={{scale:1.2}} className="fab fa-instagram"></motion.i>
            </a>
          </li>
        </ul>
      </div>
      <div orientation="right" className="email-nav-link">
        <div className="lightbulb">
          <motion.a onClick={this.props.toggle} className="far fa-lightbulb"></motion.a>
        </div>
      </div>
      </motion.div>
    );
  }
}

export default Socials;
