import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Image } from 'react-bootstrap';

const Species = (props) => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async (nama) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nama}`);
    setPokemon(res.data.sprites.front_shiny);
  };

  useEffect(() => {
    getPokemon(props.nama);
  }, []);

  return (
    <Card className='mt-2'>
      <Row>
        <Col xs={3}>
          <Image width='100px' src={pokemon} />
        </Col>
        <Col xs={9}>
          <Table className='mt-3'>
            <tbody>
              <tr>
                <th>Nama</th>
                <td>{props.nama}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  );
};

export default Species;
