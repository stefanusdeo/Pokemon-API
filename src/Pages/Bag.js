import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ListBag from "../Components/ListBag";

import Loader from "../Components/Loader";

const Bag = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    const localBag = localStorage.getItem("dbBag");
    if (localBag) {
      const dbPokemon = JSON.parse(localBag);
      setPokemon(dbPokemon);
      setLoading(false);
    } else {
      setPokemon([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="text-center">
          <h1>Isi Tas</h1>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => window.history.back()}
            >
              <FontAwesomeIcon icon={faBackward} className="me-2" /> Back
            </button>
          </div>
          <Row>
            {pokemon.map((res) => (
              <Col key={res?.data?.id} xs={12} sm={12} md={4}>
                <ListBag pokemon={res?.data} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Bag;
