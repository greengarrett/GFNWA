/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
                rel="noreferrer"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
            rel="noreferrer"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank"
            rel="noreferrer"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
