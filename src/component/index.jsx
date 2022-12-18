import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

import "./index.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://kodepos.vercel.app/search/?q=${search}`)
      .then((response) => {
        setData(response.data.data);
        console.log(data);
        setLoading(false);
      })
      .finally(() => {
        // Clear the data when the component unmounts
        return () => {
          setSearch("");
          setLoading(true);
          setData([]);
        };
      });
  }, [search]);

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={6}>
          <h2>Cari Kodepos</h2>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 mb-3 mt-4"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Row className="d-flex justify-content-center mt-5">
            <Col md={1}>
              <div class="chaotic-orbit"></div>
            </Col>
          </Row>
        ) : (
          data?.map((data, key) => (
            <Card className="m-2 mt-2" style={{ width: "22rem" }} key={key}>
              <ListGroup variant="flush">
                <ListGroup.Item>Provinsi : {data.province}</ListGroup.Item>
                <ListGroup.Item>Kabupaten : {data.city}</ListGroup.Item>
                <ListGroup.Item>Kecamatan : {data.subdistrict}</ListGroup.Item>
                <ListGroup.Item>Kelurahan/Desa : {data.urban}</ListGroup.Item>
                <ListGroup.Item>Kodepos : {data.postalcode}</ListGroup.Item>
              </ListGroup>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Index;
