import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

function Candles({ darkMode }) {
  const location = useLocation();
  const { velasFiltradas, nombreColeccion  } = location.state || { velasFiltradas: [], nombreColeccion: "colección"};

  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>Velas {nombreColeccion}</h2>
      <Row>
        {velasFiltradas.map((vela) => (
          <Col key={`vela-${vela.id_vela}`} sm="12" md="6" lg="4" className="mb-4">
            <Card className="text-center">
                {/* Guardar una imagen para cada vela en la BD */}
              <CardImg top width="100%" src={vela.image} alt={vela.nombre} />
              <CardBody>
                <CardTitle tag="h5">{vela.nombre}</CardTitle>
                <CardText>{vela.descripcion}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Candles;
