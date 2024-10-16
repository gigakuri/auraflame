import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const Velas = [
  { id: 1, name: "Velas Relajantes", descripcion: "texto", image: "/img/img2.jpeg" },
  { id: 2, name: "Velas Dulces", descripcion: "texto", image: "/img/img1.jpeg" },
  { id: 3, name: "Velas Florales", descripcion: "texto", image: "/img/img3.jpeg" },
];

function Productos() {
  return (
    <section className="featured-products">
      <h2>Colecciones</h2>
      <Row>
        {Velas.map(product => (
          <Col key={product.id} sm="12" md="6" lg="4" className="mb-4">
            <Card className="text-center">
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>{product.descripcion}</CardText>
                <Button color="warning" outline>Ver Colección</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Productos;