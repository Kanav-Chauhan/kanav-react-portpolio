import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5">
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/kanav-chauhan-7a1a24230/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://discord.gg/hMm4NYN7bS"target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/handsome_kanav/"target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://twitter.com/handsome_kanav"target="_blank"><img src={navIcon4} alt="" /></a>
                <a href="https://github.com/Kanav-Chauhan"target="_blank"><img src={navIcon5} alt="" /></a>
            </div>
            <p>Made With 💖 By Kanav Chauhan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
