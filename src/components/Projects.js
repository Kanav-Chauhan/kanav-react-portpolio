import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/proj4.png";
import projImg5 from "../assets/img/proj5.png";
import meta from "../assets/img/meta.png";
import ytclone from "../assets/img/ytclone.png";
import gym from "../assets/img/gym.png";
import movie from "../assets/img/movie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gym Guide",
      description: "An API based Gym guide for all types of Exercise",
      imgUrl: gym,
      projLink:"https://gym-kanav.netlify.app",
    },
    {
      title: "Meta Verse",
      description: "A Beautiful Landing page for Meta Verse  ",
      imgUrl: meta,
      projLink:"https://meta-kanav.netlify.app",

    },
    {
      title: "Youtube Clone",
      description: "A Clone of an Biggest Video Sharing Platform",
      imgUrl: ytclone,
      projLink:"https://youtube-kanav.netlify.app",

    },
    {
      title: "Movie Search",
      description: "Movie Search using API in React",
      imgUrl: movie,
      projLink:"https://movie-kanav.netlify.app",

    },
  ];

  const projects2 = [
    
    {
      title: "Old Portfolio",
      description: "Basic Portfolio by HTML,CSS,JS",
      imgUrl: projImg4,
      projLink:"https://kanav-chauhan.github.io/Portfolio/",

    },
    {
      title: "SRM Notes",
      description: "Website to Aid College Students",
      imgUrl: projImg5,
      projLink:"https://srmnotes.live",

    },
   
  ];
  const projects3 = [
    {
      title: "Simon Game",
      description: "An Amazing Game 2D",
      imgUrl: projImg1,
      projLink:"https://kanav-chauhan.github.io/Simon-Game/",
    },
    {
      title: "Dice Game",
      description: "A 2-P Dice Game ",
      imgUrl: projImg2,
      projLink:"https://kanav-chauhan.github.io/Dice-Game/",

    },
    {
      title: "A Drum Kit",
      description: "Press Key Drum Sound",
      imgUrl: projImg3,
      projLink:"https://kanav-chauhan.github.io/Drum-Kit/",

    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am always ready for some hands-on experience and building projects is a great way of gaining experience, I build some awesome website projects </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
