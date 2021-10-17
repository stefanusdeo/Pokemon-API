import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
  const type = props.pokemon.types;

  const tangkapHandler = (id) => {
    props.tangkap(id);
  };

  return (
    <Card className='my-3 p-3 rounded text-center shadow mb-5 bg-light'>
      <Link
        to={`/pokemon/${props.pokemon.id}`}
        style={{ textDecoration: 'none', color: 'gray' }}
      >
        <Card.Img
          style={{ width: '14rem' }}
          src={props.pokemon.sprites.front_shiny}
          variant='top'
        />
        <Card.Body>
          <Card.Title>
            <h2 style={{ textTransform: 'uppercase' }}>{props.pokemon.name}</h2>
          </Card.Title>
          <ul style={{ listStyleType: 'none' }}>
            {type.map((p) => (
              <li
                style={{
                  display: 'inline',
                  marginRight: '10px',
                }}
                key={p.type.name}
              >
                {p.type.name}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Link>
      <Card.Footer>
        <Row>
          <Col xs={6} className='d-flex justify-content-start'>
            <Link
              to={`/pokemon/${props.pokemon.id}`}
              className='btn btn-sm btn-secondary'
            >
              Detail
            </Link>
          </Col>
          <Col xs={6} className='d-flex justify-content-end'>
            <Button
              onClick={() => tangkapHandler(props.pokemon.id)}
              className='btn btn-sm btn-primary'
            >
              Tangkap
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Pokemon;
