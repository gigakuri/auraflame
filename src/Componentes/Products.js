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
  Row,
  Col,
  Button,
} from "reactstrap";

function Products({ darkMode }) {
  const [velas, setVelas] = useState([]);
  const [colecciones, setColecciones] = useState([]);

  useEffect(() => {
    axios
      .get(URLPHP + "getColecciones.php")
      .then((response) => setColecciones(response.data))
      .catch((error) => console.error("Error al cargar colecciones:", error));

    axios
      .get(URLPHP + "getVelas.php")
      .then((response) => setVelas(response.data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>Colecciones</h2>
      <Row>
        {colecciones.map((product) => {
          const velasFiltradas = velas.filter(
            (vela) => vela.id_coleccion === product.id_coleccion && vela.delete_date === null
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
                  <CardText style={{'textAlign': 'justify'}}>{product.descripcion}</CardText>
                  <Link
                    to="/store"
                    state={{ velasFiltradas, nombreColeccion: product.nombre }}
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