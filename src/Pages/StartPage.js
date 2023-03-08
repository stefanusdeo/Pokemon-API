import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <Card
      className="shadow p-5"
      style={{ textAlign: "center", marginTop: "20%" }}
    >
      <Row>
        <Col>
          <h1>Ayo Cari Pokemon Sekarang!!!</h1>
          <p>By: Deo</p>
        </Col>
        <Col md={12}>
          <p>
            Ini Adalah Website pertama yang saya bangun menggunakan React js,
            dimana website ini kamu diminta menangkap pokemon sebanyak banyaknya
            dengan probibilitas kamu bisa menangkap pokemon 50%. Jadi ayo
            tangkap pokemon kamu!
          </p>
          <Link to="/cariPokemon" className="btn btn-primary">
            Cari Pokemon!
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default StartPage;
