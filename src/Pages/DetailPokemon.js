import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, Row, Col, Image, Table } from 'react-bootstrap';

import Loader from '../Components/Loader';
import Species from '../Components/Species';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const DetailPokemon = (props) => {
  const id = props.match.params.id;

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [speciest, setSpeciest] = useState([]);
  const [types, setTypes] = useState([]);

  const getSpecies = async (species) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${species}`
    );
    setSpeciest(res.data.varieties);
  };

  const getPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    getSpecies(res.data.species.name);
    setPokemon(res);
    setTypes(res.data.types);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  console.log(types);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Card className='mt-5'>
            <Row>
              <Col md={4} className='d-flex justify-content-center'>
                <Image width='200px' src={pokemon.data.sprites.front_shiny} />
              </Col>
              <Col md={8}>
                <Table className='mt-3'>
                  <tbody>
                    <tr>
                      <th>Nama</th>
                      <td>{pokemon.data.name}</td>
                    </tr>
                    <tr>
                      <th>Species</th>
                      <td>{pokemon.data.species.name}</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>
                        {types.map((a) => (
                          <p>{a.type.name}</p>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Card.Footer>
              <Row>
                <Col xs={6} className='d-flex justify-content-start'>
                  <button className='btn btn-sm btn-primary'>Tangkap!</button>
                </Col>
                <Col xs={6} className='d-flex justify-content-end'>
                  <button
                    className='btn btn-sm btn-secondary'
                    onClick={() => window.history.back()}
                  >
                    <FontAwesomeIcon icon={faBackward} className='me-2' /> Back
                  </button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <h2 className='mt-2'>Sepcies of {pokemon.data.species.name}</h2>
          <Row>
            {speciest.map((p) => (
              <Col key={p.pokemon.name} md={6} xs={12}>
                <Species nama={p.pokemon.name} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default DetailPokemon;
