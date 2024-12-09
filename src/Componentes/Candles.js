import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
import axios from "axios";
import URLPHP from "./Url";

function Candles({ darkMode, addToCart, isAuthenticated, rol }) {
  const location = useLocation();
  const { velasFiltradas, nombreColeccion } = location.state || {
    velasFiltradas: [],
    nombreColeccion: "colección",
  };

  const [localVelasFiltradas, setLocalVelasFiltradas] = useState(velasFiltradas);

  const softDelete = async (id_vela) => {
    try {
      const response = await axios.post(URLPHP + "deleteVela.php", { id_vela });
      if (response.status === 200) {
        console.log("Vela eliminada exitosamente.");
  
        const updatedVelas = localVelasFiltradas.filter((vela) => vela.id_vela !== id_vela);
        setLocalVelasFiltradas(updatedVelas);
      }
    } catch (error) {
      console.error("Error al intentar eliminar la vela:", error);
      alert("Hubo un error al eliminar la vela. Inténtalo de nuevo.");
    }
  };

  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>Velas {nombreColeccion}</h2>
      <Row>
        {localVelasFiltradas.map((vela) => (
          <Col
            key={`vela-${vela.id_vela}`}
            sm="12"
            md="6"
            lg="4"
            className="mb-4"
          >
            <Card className="text-center">
              <CardImg top width="100%" src={vela.img} alt={vela.nombre} />
              <CardBody>
                <CardTitle tag="h5">{vela.nombre}</CardTitle>
                <CardText style={{'textAlign': 'center'}}>{vela.descripcion}</CardText>
                <Button onClick={() => addToCart(vela)}>Comprar</Button>
                {isAuthenticated && rol === "admin" && (
                  <Button style={{backgroundColor: "#849FA0"}}>Editar</Button>
                )}
                {isAuthenticated && rol === "admin" && (
                  <Button onClick={() => softDelete(vela.id_vela)} style={{backgroundColor: "#E07A5F"}}>Borrar</Button>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Candles;
