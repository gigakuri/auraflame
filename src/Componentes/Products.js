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
} from "reactstrap";

// Corregir esta constante, crear la tabla colecciones, cambiando el campo coleccion de velas a id_coleccion
const Colecciones = [
  {
    id: 1,
    name: "Velas Relajantes",
    colección: "Relajantes",
    descripcion:
      "Sumérgete en un ambiente de paz y calma con nuestras velas relajantes, creadas para aliviar el estrés y revitalizar tus sentidos con fragancias suaves y relajantes.",
    image: "/img/img2.jpeg",
  },
  {
    id: 2,
    name: "Velas Dulces",
    colección: "Dulces",
    descripcion:
      "Endulza tu espacio con las deliciosas fragancias de nuestras velas dulces, que evocan el confort de los aromas cálidos y apetitosos, perfectos para crear un ambiente acogedor.",
    image: "/img/img1.jpeg",
  },
  {
    id: 3,
    name: "Velas Florales",
    colección: "Florales",
    descripcion:
      "Lleva la frescura de un jardín a tu hogar con nuestras velas florales, infusionadas con notas naturales de flores para un ambiente delicado y revitalizante.",
    image: "/img/img3.jpeg",
  },
];

function Products({ darkMode }) {
  const [velas, setVelas] = useState([]);

  useEffect(() => {
    axios
      .get(URLPHP + "getVelas.php")
      .then((response) => setVelas(response.data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);
  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>Colecciones</h2>
      <Row>
        {Colecciones.map((product) => {
          // Filtrar las velas según la categoría de la colección
          const velasFiltradas = velas.filter(
            (vela) => vela.colección === product.colección
          );

          return (
            <Col key={`collection-${product.id}`} sm="12" md="6" lg="4" className="mb-4">
              <Card className="text-center">
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.name}
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.descripcion}</CardText>
                  <Link
                    to="/store"
                    state={{ velasFiltradas, nombreColeccion: product.colección }} // Pasamos las velas filtradas usando 'state'
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
