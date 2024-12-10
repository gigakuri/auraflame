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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import URLPHP from "./Url";
import { FaTrashCan, FaPlus } from "react-icons/fa6";

function Candles({ darkMode, addToCart, isAuthenticated, rol }) {
  const location = useLocation();
  const { velasFiltradas, nombreColeccion, id_coleccion } = location.state || {
    velasFiltradas: [],
    nombreColeccion: "colección",
    id_coleccion: null,
  };

  const [localVelasFiltradas, setLocalVelasFiltradas] =
    useState(velasFiltradas);

  const [modalOpen, setModalOpen] = useState(false);
  const [newVela, setNewVela] = useState({
    nombre: "",
    descripcion: "",
    img: "",
    stock: "",
    precio: "",
    id_coleccion: id_coleccion
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVela((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddVela = async (e) => {
    e.preventDefault();
    console.log(newVela);
    try {
      const response = await axios.post(URLPHP + "insertVela.php", newVela);
        console.log("Vela agregada con éxito.");
        // Actualiza
        setLocalVelasFiltradas((prev) => [
          ...prev,
          { ...newVela, id_vela: response.data.id_vela },
        ]);
        toggleModal();

    } catch (error) {
      console.error("Error al agregar la vela:", error);
    }
  };

  const softDelete = async (id_vela) => {
    try {
      const response = await axios.post(URLPHP + "deleteVela.php", { id_vela });
      if (response.status === 200) {
        console.log("Vela eliminada con éxito.");

        const updatedVelas = localVelasFiltradas.filter(
          (vela) => vela.id_vela !== id_vela
        );
        setLocalVelasFiltradas(updatedVelas);
      }
    } catch (error) {
      console.error("Error al intentar eliminar la vela:", error);
    }
  };

  return (
    <section className={`featured-products ${darkMode ? "dark" : "light"}`}>
      <h2>
        Velas {nombreColeccion}{" "}
        {isAuthenticated && rol === "admin" && (
          <Button
            style={{
              backgroundColor: "#202f51",
              padding: "5px 6px",
              fontSize: "10px",
              borderRadius: "8px",
            }}
            onClick={toggleModal}
          >
            <FaPlus style={{ fontSize: "18px" }} />
          </Button>
        )}
      </h2>
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
                <CardText style={{ textAlign: "center" }}>
                  {vela.descripcion}
                </CardText>
                <CardText style={{ textAlign: "center", fontWeight: "bold" }}>
                  {vela.precio}€
                </CardText>
                <Button onClick={() => addToCart(vela)}>
                  Añadir al carrito
                </Button>
                {isAuthenticated && rol === "admin" && (
                  <Button
                    onClick={() => softDelete(vela.id_vela)}
                    style={{ backgroundColor: "#E07A5F" }}
                  >
                    <FaTrashCan />
                  </Button>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Modal para agregar nueva vela */}
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Agregar Nueva Vela</ModalHeader>
        <Form onSubmit={handleAddVela}>
          <ModalBody>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={newVela.nombre}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="descripcion">Descripción</Label>
              <Input
                type="textarea"
                name="descripcion"
                id="descripcion"
                value={newVela.descripcion}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <Input
                type="text"
                name="precio"
                id="precio"
                value={newVela.precio}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="stock">Stock</Label>
              <Input
                type="text"
                name="stock"
                id="stock"
                value={newVela.stock}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="img">Imagen (URL)</Label>
              <Input
                type="text"
                name="img"
                id="img"
                value={newVela.img}
                onChange={handleInputChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              color="secondary"
              style={{ backgroundColor: "#849FA0" }}
            >
              Agregar
            </Button>
            <Button
              color="secondary"
              onClick={toggleModal}
              style={{ backgroundColor: "#555" }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </section>
  );
}

export default Candles;
