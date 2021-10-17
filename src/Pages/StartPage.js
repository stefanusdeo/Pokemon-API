import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <Card
      className='shadow p-5'
      style={{ textAlign: 'center', marginTop: '20%' }}
    >
      <Row>
        <Col>
          <h1>Ayo Cari Pokemon Sekarang!!!</h1>
          <p>By: Deo</p>
        </Col>
        <Col md={12}>
          <Link to='/cariPokemon' className='btn btn-primary'>
            Cari Pokemon!
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default StartPage;
