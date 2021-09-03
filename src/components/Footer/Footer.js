import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>West Bengal Government</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.nic.in/">National Informatics Centre</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
