"use client";
import Image from "next/image.js";
import "./TitlePage.css";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import imageTab from "@/assets/img/tabimage.png";

export default function TitlePage() {
  return (
    <section id="vision" className="title-container">
      <div className="title-content ">
        <div className="image-box-tab">
          <Image
            width={743}
            height={484}
            src={imageTab}
            loading="lazy"
            className="image-tab"
          />
        </div>
        <Tab.Container id="tabs-example" defaultActiveKey="first">
          <Col>
            <Row>
              <Nav className="flex-row  justify-start align-baseline">
                <Nav.Item>
                  <Nav.Link eventKey="first">Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="therd">Focus</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Empowering</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Col sm={9}>
              <Tab.Content className=" text-start mt-16">
                <Tab.Pane eventKey="first">
                  <h2>Our Vision</h2>
                  <h4>
                    DecVolt is on a mission to{" "}
                    <span class="highlight">redefine</span> the future of
                    energy. We envision a world where energy is{" "}
                    <span class="highlight">abundant</span>,{" "}
                    <span class="highlight">sustainable</span>, and{" "}
                    <span class="highlight">accessible</span> to everyone.{" "}
                    <span class="highlight">Our goal</span> is to decentralize
                    the energy grid and pioneer{" "}
                    <span class="highlight">innovative technologies</span> like
                    wireless power transmission, paving the way for a{" "}
                    <span class="highlight">cleaner, greener future.</span>
                  </h4>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h2>Our Mission</h2>
                  <h4>
                    At DecVolt,we're driven by a{" "}
                    <span class="highlight">singular purpose:</span> to
                    democratize access to
                    <span class="highlight">clean energy.</span> We're committed
                    to empowering individuals, communities, and businesses to{" "}
                    <span class="highlight">harness the power</span> of
                    renewable sources and contribute to a more{" "}
                    <span class="highlight">sustainable planet.</span>{" "}
                    <span class="highlight">Our mission</span> extends beyond
                    conventional boundaries as we aspire to build{" "}
                    <span class="highlight">towards ambitious projects</span>
                    like Dyson Spheres,revolutionizing how we perceive and{" "}
                    <span class="highlight">utilize solar energy.</span>
                  </h4>
                </Tab.Pane>
                <Tab.Pane eventKey="therd">
                  <h2>Niche Market Focus</h2>
                  <h4>
                    DecVolt's initial focus centers on the{" "}
                    <span class="highlight">electric vehicle (EV)</span>{" "}
                    charging market. Our platform serves as a{" "}
                    <span class="highlight">catalyst for change,</span>{" "}
                    transforming ordinary parking spaces into{" "}
                    <span class="highlight">vibrant hubs</span> of energy
                    exchange. By fostering a{" "}
                    <span class="highlight">peer-to-peer marketplace</span> for
                    EV charging, we're democratizing access to{" "}
                    <span class="highlight">charging infrastructure</span> and
                    accelerating the adoption of electric vehicles worldwide.
                  </h4>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <h2>Empowering Hosts and Users </h2>
                  <h4>
                    With DecVolt, anyone with a parking space and an electric
                    socket can<br></br>{" "}
                    <span class="highlight">become a host,</span> empowering
                    individuals to become{" "}
                    <span class="highlight">active participants</span> in the
                    energy transition.For EV owners,our platform offers{" "}
                    <span class="highlight">unparalleled convenience</span> and
                    accessibility, making sustainable transportation a{" "}
                    <span class="highlight">viable choice for all.</span>{" "}
                  </h4>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Col>
        </Tab.Container>
      </div>
    </section>
  );
}
