import React from "react";
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

const Colecciones = [
  {
    id: 1,
    name: "Velas Relajantes",
    descripcion:
      "Sumérgete en un ambiente de paz y calma con nuestras velas relajantes, creadas para aliviar el estrés y revitalizar tus sentidos con fragancias suaves y relajantes.",
    image: "/img/img2.jpeg",
  },
  {
    id: 2,
    name: "Velas Dulces",
    descripcion:
      "Endulza tu espacio con las deliciosas fragancias de nuestras velas dulces, que evocan el confort de los aromas cálidos y apetitosos, perfectos para crear un ambiente acogedor.",
    image: "/img/img1.jpeg",
  },
  {
    id: 3,
    name: "Velas Florales",
    descripcion:
      "Lleva la frescura de un jardín a tu hogar con nuestras velas florales, infusionadas con notas naturales de flores para un ambiente delicado y revitalizante.",
    image: "/img/img3.jpeg",
  },
];

function Productos({ darkMode }) {
  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>Colecciones</h2>
      <Row>
        {Colecciones.map((product) => (
          <Col key={product.id} sm="12" md="6" lg="4" className="mb-4">
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
                <Button color="warning" outline>
                  Ver Colección
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Productos;
