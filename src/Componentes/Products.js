import React, { useState, useEffect } from "react";
import axios from "axios";
import URLPHP from "./Url";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Products({ darkMode, isAuthenticated, username, handleLogout }) {
  const [velas, setVelas] = useState([]);
  const [colecciones, setColecciones] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    // Cargar las colecciones desde la base de datos
    axios
      .get(URLPHP + "getColecciones.php")
      .then((response) => setColecciones(response.data))
      .catch((error) => console.error("Error al cargar colecciones:", error));

    // Cargar las velas desde la base de datos
    axios
      .get(URLPHP + "getVelas.php")
      .then((response) => setVelas(response.data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h4>
        {isAuthenticated ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle tag="span" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                {username} | Cart(0)
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={handleLogout}>
                <Link to="/">Cerrar Sesión</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link to="/login">Iniciar Sesión</Link>
          )}
      </h4>
      <h2>Colecciones</h2>
      <Row>
        {colecciones.map((product) => {
          // Filtrar las velas según el id_coleccion
          const velasFiltradas = velas.filter(
            (vela) => vela.id_coleccion === product.id_coleccion
          );

          return (
            <Col
              key={`collection-${product.id_coleccion}`}
              sm="12"
              md="6"
              lg="4"
              className="mb-4"
            >
              <Card className="text-center">
                <CardImg
                  top
                  width="100%"
                  src={product.img}
                  alt={product.nombre}
                />
                <CardBody>
                  <CardTitle tag="h5">{product.nombre}</CardTitle>
                  <CardText>{product.descripcion}</CardText>
                  <Link
                    to="/store"
                    state={{ velasFiltradas, nombre: product.nombre }}
                  >
                    <Button color="warning" outline>
                      Ver Colección
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Products;
