import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
} from "mdbreact";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import retrato from "../img/retrato.png";
import edu from "../img/login.png";
import gav from "../img/gav.png";
/* import unimarc from "../img/unimarc.png"; */
import portal from "../img/portal.png"
import Proyectos from "../Components/Proyectos"
import migrante from "../img/migrante.png";
import tango from "../img/tango.png"

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div>
        <header>
          <MDBNavbar color="white" dark expand="md" fixed="top">
            <MDBNavbarBrand>
              <img className="logo" src={logo} alt="imglogo" />
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler className="burger" onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav
                className="mt-4 "
                style={{
                  fontFamily: "Merriweather",
                  fontSize: "1.3em",
                  fontWeight: "400",
                }}
              >
                <MDBNavItem active>
                  <MDBNavLink
                    className=""
                    style={{ color: "rgba(89, 89, 89, 1)" }}
                    to="/"
                  >
                    Inicio
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className=""
                    style={{ color: "rgba(89, 89, 89, 1)" }}
                    to="/Proyectos"
                  >
                    Proyectos
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className=""
                    style={{ color: "rgba(89, 89, 89, 1)" }}
                    to="/About"
                  >
                    Sobre Mi
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavbarBrand>
                  <a href="mailto:carla.renee.diazc@gmail.com">
                    <img className="cont" src={contacto} alt="imgcontacto" />
                  </a>
                </MDBNavbarBrand>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <div >
            <div className="flex-center ctn">
              <div className="row">
                {/*<div className="flex-center col-sm-12 col-md-5 ml-5 mt-0">
                  <img className="retrato" src={retrato} alt="imgretrato" />
              </div>*/}

                {/*<div className="textoPresentacion  col-sm-12 col-md-6 ">
                  <h5 className="hola ">
                    Hola, soy{" "}
                    <mark
                      style={{
                        background: "rgb(254 212 116 / 57%)",
                        borderRadius: "10px 17px 17px 10px",
                        paddingRight: "0.8rem",
                        paddingTop: "0rem",
                        paddingBottom: "0rem",
                      }}
                    >
                      <mark
                        style={{
                          background: "#FED474",
                          borderRadius: "10px 17px 17px 10px",
                          paddingRight: "0.8rem",
                          paddingTop: "0rem",
                          paddingBottom: "0rem",
                        }}
                      >
                        <mark
                          style={{
                            background: "rgb(255 88 51 / 37%)",
                            borderRadius: "10px 17px 17px 10px",
                            paddingRight: "0.8rem",
                            paddingTop: "0rem",
                            paddingBottom: "0rem",
                          }}
                        >
                          <mark
                            style={{
                              background: "rgba(220, 21, 21, 0.21)",
                              borderRadius: "10px 17px 17px 10px",
                              color: "rgba(89, 89, 89, 1)",
                              paddingTop: "0rem",
                              paddingBottom: "0rem",
                            }}
                          >
                            <span className="carla">Carla</span>
                          </mark>
                        </mark>
                      </mark>
                    </mark>
                  </h5>
                  <p className="vivoen">
                 Diseñadora UX/UI con experiencia diseñando interfaces web y mobile. Mi motivación principal al crear productos es poder alinear el objetivo de negocio con las necesidades de las personas
                .
                  </p>
                  <p className="soyUna">
                  
                  </p>
                </div>*/}
              </div>
            </div>
                          </div>
        </header>
        <div></div><h5 className="proyectos">
          <mark
            style={{
              background: "rgba(220, 21, 21, 0.23)",
              color: "rgba(89, 89, 89, 1)",
            }}
          >
            Proyectos
          </mark>
        </h5>
<div className=" container  col-md-10 flex-center">
          <CardDeck>
            <Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={migrante} />
              <Card.Body>
                <Card.Title className="cardTittle">Migrante</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                 Diseño de plataforma nacional e internacional de simulación de créditos para migrantes.
                </Card.Text>
                <Link to="/Gav">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "2.5rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={tango} />
              <Card.Body>
                <Card.Title className="cardTittle">Tango Rent</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Sitio de venta y arriendo de propiedades 100% on line.
                </Card.Text>
                <Link to="/Unimarc">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "3.6rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          
            
          
            {/*<Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img className="imgUni" variant="top" /* src={unimarc}  />
              <Card.Body>
                <Card.Title className="cardTittle">Recetas Unimarc</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Rediseño de la sección de recetas correspondiente a la
                  plataforma web Unimarc. Proyecto ganador "Hackaton"
                  Laboratoria
                </Card.Text>
                <Link to="/Unimarc">
                  {" "}
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "2.5rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            {/*<Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={japan} />
              <Card.Body clasName="pro">
                <Card.Title className="cardTittle">Japan Queen</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  App para restaurantes que se origina como solución a la
                  gestión de pedidos, eliminando el uso de comandas y toma de
                  ordenes a mano.
                </Card.Text>
                <Link to="/JapanQueen">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "1rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>*/}
          <Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={edu} />
              <Card.Body clasName="pro">
                <Card.Title className="cardTittle">Educación Financiera</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Transformación digital del programa de Educación financiera de Fosis por medio de la consultora Satori.
                </Card.Text>
                <Link to="/EdFinanciera">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "2.4rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
     
            
          </CardDeck>
        </div>
        
        <div className=" container  col-md-10 flex-center">
          <CardDeck>
            
          
            
          {/*<Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={portal} />
              <Card.Body>
                <Card.Title className="cardTittle">Cyber Monday</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Construcción y corrección de Landing para la campaña Cyber Monday en Mercado Libre y Portal Inmobiliario.
                </Card.Text>
                <Link to="/Portal">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "3rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            {/*<Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img className="imgUni" variant="top" /* src={unimarc}  />
              <Card.Body>
                <Card.Title className="cardTittle">Recetas Unimarc</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Rediseño de la sección de recetas correspondiente a la
                  plataforma web Unimarc. Proyecto ganador "Hackaton"
                  Laboratoria
                </Card.Text>
                <Link to="/Unimarc">
                  {" "}
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "2.5rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            {/*<Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={japan} />
              <Card.Body clasName="pro">
                <Card.Title className="cardTittle">Japan Queen</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  App para restaurantes que se origina como solución a la
                  gestión de pedidos, eliminando el uso de comandas y toma de
                  ordenes a mano.
                </Card.Text>
                <Link to="/JapanQueen">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "1rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>*/}
          
     
            
          </CardDeck>
        </div>

        <div className=" container contTags ">
          <h5 className="tePuedo">
            <mark
              style={{
                background: "rgba(220, 21, 21, 0.23)",
                color: "rgba(89, 89, 89, 1)",
              }}
            >
              Te puedo ayudar con esto
            </mark>
          </h5>

          <div className="tags row col-md-12">
            <p className="tagUno">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 2rem",
                }}
              >
                Research
              </mark>
            </p>
            <p className="tagDos">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 1.3rem",
                }}
              >
                Benchmark
              </mark>
            </p>
            <p className="tagTres">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 1.8rem",
                }}
              >
                sketching
              </mark>
            </p>

            <p className="tagCuatro">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 1rem",
                }}
              >
                Wireframing
              </mark>
            </p>
            <p className="tagCinco">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 1.3rem",
                }}
              >
                Prototyping
              </mark>
            </p>
            <p className="tagSeis">
              <mark
                style={{
                  background: "rgba(37, 222, 178, 0.3)",
                  borderRadius: "25px",
                  padding: "0.5rem 2.5rem",
                }}
              >
                Testing
              </mark>
            </p>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;
